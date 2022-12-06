import { useEffect, useState } from 'react'

const useData = () => {
    const [candidates, setCandidates] = useState()
    const [companies, setCompanies] = useState()
    const [reports, setReports] = useState()
    const [users, setUsers] = useState()
    
    useEffect(() => {
        fetch('http://localhost:3333/api/candidates')
            .then(res => res.json())
            .then(res => setCandidates(res))
        fetch('http://localhost:3333/api/companies')
            .then(res => res.json())
            .then(res => setCompanies(res))
        fetch('http://localhost:3333/api/reports')
            .then(res => res.json())
            .then(res => setReports(res))
        fetch('http://localhost:3333/api/users')
            .then(res => res.json())
            .then(res => setUsers(res))
    }, [])
    

  return { candidates, companies, reports, users }
}

export default useData