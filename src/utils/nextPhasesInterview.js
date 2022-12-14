const nextPhasesInterview = (candidateId, companyId, reports) => {
  const PHASES = ["cv", "hr", "tech", "final"];
  const nextPhase = reports.filter(
    (report) =>
      candidateId === report.candidateId && companyId === report.companyId
  ).length;
  return PHASES.slice(nextPhase, PHASES.length);
};

export default nextPhasesInterview;
