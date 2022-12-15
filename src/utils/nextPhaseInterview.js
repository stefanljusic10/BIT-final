const nextPhaseInterview = (candidateId, companyId, reports) => {
  const PHASES = ["cv", "hr", "tech", "final"];

  const candidateReportsForCopmany = reports.filter((report) => candidateId === report.candidateId && companyId === report.companyId)
  const allPhassesPassed = candidateReportsForCopmany.every(report => report.status === "passed")
  const nextPhase = candidateReportsForCopmany.length;

  if(nextPhase === 0)
    return PHASES[0]
    
  if(nextPhase < PHASES.length && allPhassesPassed)
    return PHASES[nextPhase]

  if(nextPhase === PHASES.length - 1 && allPhassesPassed)
    return 'end-passed'

  if(!allPhassesPassed)
    return 'end-declined'
};

export default nextPhaseInterview;
