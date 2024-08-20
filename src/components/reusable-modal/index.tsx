"use client";
import { useRef, useState } from "react";
import { NextPage } from "next";
import {
  Box,
  DialogContent,
  Grid,
  Button,
  Dialog,
  Typography,
} from "@mui/material";
import ReusableTable from "../reusable-table";
import { FieldType } from "@/utils/types/modal";
import { GenerateModalField } from "../generate-modal-field";


type Props = {
  handleModalFieldOnChange: (permission: any, newValue: string, fieldAlias: string, setValues: any) => void;
  handleSubmit: (values: any) => void;
  handleToggle: () => void;
  handleChangePage?: any;
  handleChangeRowsPerPage?: any;
  title: string;
  isModal: boolean;
  editData?: any;
  modalFields: FieldType[];
  columnsPermission?: any;
  tableData?: any;
  permissionPagination?: any;
  setPermissionPagination?: any;
  handlePermission?: any;
};

type ErrorType = {
  message: string;
  status: boolean;
}

const ReusableModal: NextPage<Props> = ({
  handleModalFieldOnChange,
  handleToggle,
  handleSubmit,
  handleChangePage,
  handleChangeRowsPerPage,
  columnsPermission,
  handlePermission,
  permissionPagination,
  modalFields,
  tableData,
  editData,
  isModal,
  title,
}) => {
  const [values, setValues] = useState(editData || {});
  const [error, setError] = useState<ErrorType>({ message: "", status: false })
  const formRef = useRef<any>({})
  
  

  const handleForm = (evt: any) => {
    evt.preventDefault();
    handleSubmit(values);
  };

  const handleModalClose = () => {
    handleToggle();
  };


  return (
    <Dialog
      open={isModal}
      onClose={handleModalClose}
      maxWidth="md"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <Typography sx={{ fontWeight: 600, fontSize: "1.7rem" }}>
          {title}
        </Typography>
        <Box mt={3}>
          {
            error.status &&
            <Typography sx={{ color: "red", textAlign: "center", fontWeight: 500, marginBottom: "1rem" }}>{error.message}</Typography>
          }
          <form ref={formRef} onSubmit={handleForm}>
            <Grid spacing={3} container>
              {modalFields?.map((field: any) => {
                return (
                  <Grid key={field.id} item xs={12} lg={field.column}>
                    <GenerateModalField
                      values={values}
                      setValues={setValues}
                      handleModalFieldOnChange={handleModalFieldOnChange}
                      field={field} />
                  </Grid>
                );
              })}

              {tableData && (
                <ReusableTable
                  handleChangeRowsPerPage={handleChangeRowsPerPage}
                  permissionPagination={permissionPagination}
                  columnsPermission={columnsPermission}
                  tableData={tableData} values={values}
                  handlePermission={handlePermission}
                  handleChangePage={handleChangePage}
                  setValues={setValues}
                />
              )}

              <Grid item xs={12} lg={12}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mr: 1 }}
                  type="submit"
                >
                  Submit
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleModalClose}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ReusableModal;


