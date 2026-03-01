const API_BASE = "http://127.0.0.1:8001";

// For PoC standalone, we'll hardcode company_id to 1. 
// In a full app, this comes from a hook/context.
const DEFAULT_HEADERS = {
    "Content-Type": "application/json",
    "X-Company-ID": "1",
};

export async function fetchAccounts() {
    const res = await fetch(`${API_BASE}/accounts`, { headers: DEFAULT_HEADERS });
    if (!res.ok) throw new Error("Failed to fetch accounts");
    return res.json();
}

export async function fetchTrialBalance() {
    const res = await fetch(`${API_BASE}/trial-balance`, { headers: DEFAULT_HEADERS });
    if (!res.ok) throw new Error("Failed to fetch trial balance");
    return res.json();
}

export async function fetchJournal(id: number) {
    const res = await fetch(`${API_BASE}/journals/${id}`, { headers: DEFAULT_HEADERS });
    if (!res.ok) throw new Error("Failed to fetch journal");
    return res.json();
}

export async function createJournal(data: any) {
    const res = await fetch(`${API_BASE}/journals`, {
        method: "POST",
        headers: DEFAULT_HEADERS,
        body: JSON.stringify(data),
    });
    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.detail || "Failed to create journal");
    }
    return res.json();
}

export async function fetchDiary() {
    const res = await fetch(`${API_BASE}/reports/diary`, { headers: DEFAULT_HEADERS });
    if (!res.ok) throw new Error("Failed to fetch diary");
    return res.json();
}

export async function fetchLedger(accountId: number) {
    const res = await fetch(`${API_BASE}/reports/ledger/${accountId}`, { headers: DEFAULT_HEADERS });
    if (!res.ok) throw new Error("Failed to fetch ledger");
    return res.json();
}

export async function updateInitialBalances(data: { balances: { account_id: number, amount: number }[] }) {
    const res = await fetch(`${API_BASE}/balances/initial`, {
        method: "POST",
        headers: DEFAULT_HEADERS,
        body: JSON.stringify(data),
    });
    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.detail || "Failed to update initial balances");
    }
    return res.json();
}

export async function fetchFinancialStatements() {
    const res = await fetch(`${API_BASE}/reports/financial-statements`, { headers: DEFAULT_HEADERS });
    if (!res.ok) throw new Error("Failed to fetch financial statements");
    return res.json();
}
