const getCompaniesForCandidate = (candidateId, reports) => {
  return [
    ...new Set(
      reports
        .filter((report) => candidateId === report.candidateId)
        .map((report) => {
          return JSON.stringify({
            companyName: report.companyName,
            companyId: report.companyId,
          });
        })
    ),
  ].map((report) => JSON.parse(report));
};

export default getCompaniesForCandidate;
