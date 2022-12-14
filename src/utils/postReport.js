const postReport = (data, report, callback) => {
  const token = sessionStorage.getItem("accessToken");
  fetch("http://localhost:3333/api/reports", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(report),
  }).then((res) => {
    if (res.status >= 200 && res.status < 400) {
      data.setRefreshReports(!data.refreshReports);
      callback("/admin");
    }
  });
};

export default postReport;
