const deleteReport = (data, id) => {
  const token = sessionStorage.getItem("accessToken");
  fetch(`http://localhost:3333/api/reports/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then((res) => {
    if (res.status >= 200 && res.status < 400)
      data.setRefreshReports(!data.refreshReports);
  });
};

export default deleteReport;
