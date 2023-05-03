const deleteReport = (data, id) => {
  // const token = sessionStorage.getItem("accessToken");
  console.log(id);
  fetch(`https://637d241516c1b892ebc87a2f.mockapi.io/reports/${id}`, {
    method: "DELETE"
  })
  .then((res) => {
    if (res.status >= 200 && res.status < 400)
      data.setRefreshReports(!data.refreshReports);
  });
};

export default deleteReport;
