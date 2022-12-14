const nextPhasesInterview = (candidateId, companyName, reports) => {
    const PHASES = ['cv', 'hr', 'tech', 'final']
    const nextPhase = reports.filter(report => candidateId === report.candidateId && companyName === report.companyName).length
    return PHASES.slice(nextPhase, PHASES.length)
}

export default nextPhasesInterview