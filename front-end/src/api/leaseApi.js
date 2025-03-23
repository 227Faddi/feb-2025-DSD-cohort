import api from "./index";

export async function fetchRenewals() {
  try {
    const result = await api.get("/api/lease/renewals");
    return result.data;
  } catch (err) {
    return err;
  }
}
export async function createLease(data) {
  try {
    const result = await api.post("/api/lease/new-lease", data);

    return result.data;
  } catch (err) {
    return err;
  }
}

export async function fetchPending() {
  try {
    const result = await api.get("/api/lease/pendingLeases");
    return result.data;
  } catch (err) {
    return err;
  }
}

export async function fetchLeaseDetails(leaseId) {
  try {
    const result = await api.get(`/api/lease/renew/${leaseId}`);
    return result.data;
  } catch (err) {
    return err;
  }
}
