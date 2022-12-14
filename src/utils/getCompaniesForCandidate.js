const getCompaniesForCandidate = (candidateId, reports) => {
    return [...new Set(reports.filter(report => candidateId === report.candidateId).map(report => report.companyName))]
}

export default getCompaniesForCandidate