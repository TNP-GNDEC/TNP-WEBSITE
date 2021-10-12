import React, { useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  {
    field: "candidateName",
    headerName: "Candidate Name",
    width: 250
  },
  {
    field: "urn",
    headerName: "URN",
    type: "number",
    width: 150,
    editable: false
  },
  {
    field: "branch",
    headerName: "Branch",
    width: 180,
    editable: false
  },
  {
    field: "companyName",
    headerName: "Company Name",
    width: 400,
    editable: false
  },
  {
    field: "package",
    headerName: "Package (LPA)",
    width: 200,
    editable: false
  }
];

export default function PlacementData({ year }) {
  const [record, setRecord] = React.useState([]);

  const fetchDetails = async () => {
    const res = await axios.get(`/placement20${year}`);
    if (res.data.status === 200) {
      const RecData =
        res.data.record21 ||
        res.data.record20 ||
        res.data.record19 ||
        res.data.record18 ||
        res.data.record17 ||
        res.data.record16 ||
        res.data.record15;
      let cnt = 0;
      for (const data of RecData) {
        data.id = cnt++;
      }
      setRecord(RecData);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [year]);

  return (
    <div style={{ height: "90vh", width: "100%" }}>
      <DataGrid rows={record} columns={columns} pageSize={25} />
    </div>
  );
}
