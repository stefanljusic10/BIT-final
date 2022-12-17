const nextPhaseInterview = (candidateId, companyId, reports) => {
  const PHASES = ["cv", "hr", "tech", "final"];

  const candidateReportsForCopmany = reports
    .filter((report) => candidateId === report.candidateId && companyId === report.companyId)
  const allPhassesPassed = candidateReportsForCopmany.every(report => report.status === "passed")
  const phasesList = candidateReportsForCopmany.map(report => report.phase)
  let availablePhases = PHASES.map(phase => phasesList.includes(phase) ? "empty" : phase)
  availablePhases = availablePhases.slice(availablePhases.lastIndexOf('empty') + 1)

  if(phasesList.length === 0)
    return availablePhases[0]
    
  if(phasesList.length < PHASES.length && allPhassesPassed)
    return availablePhases[0]

  if(phasesList.length === PHASES.length - 1 && allPhassesPassed)
    return 'end-passed'

  if(!allPhassesPassed)
    return 'end-declined'
};

export default nextPhaseInterview;
