const postReport = (data, report, callback) => {
  const token = sessionStorage.getItem("accessToken");
  fetch("https://637d241516c1b892ebc87a2f.mockapi.io/reports", {
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
