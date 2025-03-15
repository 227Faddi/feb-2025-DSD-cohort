const express = require("express");
const router = express.Router();

const Apartment = require("../database/entities/apartment");
const AppDataSource = require("../database/data-source");
const { calcExpiredLease } = require("../utilis/calculateLeaseExpiration");
router.get("/", async (req, res, next) => {
  try {
    const apartments = await AppDataSource.manager.find(Apartment, {
      relations: ["lease", "lease.tenant"],
    });

    if (apartments.length === 0) {
      return res.status(200).json([]);
    }

    const apartmentsFiltered = apartments.map(apartment => {
      const { lease } = apartment;

      const leaseInformation = lease[0];

      let leaseExpired = null;
      if (leaseInformation?.lease_end_date !== undefined) {
        leaseExpired = calcExpiredLease(leaseInformation.lease_end_date);
      }
      return {
        id: apartment.id,
        apartmentNumber: apartment.apartment_number,
        leaseId: leaseInformation ? leaseInformation.id : Math.random() * 2000,
        leaseStart: leaseInformation ? leaseInformation.lease_start_date : "",
        leaseEnd: leaseInformation ? leaseInformation.lease_end_date : "",
        isExpired: leaseExpired,
        leaseStatus: leaseInformation ? leaseInformation.status : "",
        tenantName: leaseInformation ? `${leaseInformation.tenant.first_name} ${leaseInformation.tenant.last_name}` : "Vacant",
      };
    });

    if (apartmentsFiltered.length === 0) {
      return res.status(200).json([]);
    }

    return res.status(200).json(apartmentsFiltered);
  } catch (error) {
    console.log("error", error);
    return next(error);
  }
});

module.exports = router;
