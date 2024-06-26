import React, { useEffect, useState } from 'react';
import { assignAdmin } from '../../../services/userService';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Alert, Snackbar } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DetailsForm = ({ initialDetails }) => {
  const [details, setDetails] = useState(initialDetails || { name: '', department: '', email: '', password: '', address: '' });
  const [openAlert, setOpenAlert] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  const [reset, setReset] = useState(false);
  const [snackMessage, setSnackMessage] = useState({ message: "", severity: "" });

  const handleOpen = () => {
    setOpenAlert(true);
  };

  const handleClose = () => {
    setOpenAlert(false);
  };

  const handleSnackClose = () => {
    setOpenSnack(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (details.name != null && details.email != null && details.password != null && details.accessLevel != null && details.department != null && details.address != null) {
      try {
        await assignAdmin(details);
        setOpenAlert(false);
        const message = { message: "Admin assign success!", severity: "success" };
        setSnackMessage(message);
        handleReset();
      } catch (error) {
        console.log("Assign Admin error:", error.response.data);
        setOpenAlert(false);
        const message = { message: "Admin assign failed!", severity: "error" };
        setSnackMessage(message);
      }
    } else {
      const message = { message: "Provide all details !", severity: "error" };
      setSnackMessage(message);
    }
  };

  const handleReset = () => {
    setDetails({ name: '', department: '', email: '', password: '', address: '', accessLevel: '' });
  };

  useEffect(() => {
    if (snackMessage.message != "") {
      setOpenSnack(true);
    }
  }, [snackMessage])

  return (
    <div className="flex flex-col w-full h-[400px] bg-grey items-center p-3 space-y-3">
      <div className="flex w-full justify-center text-[25px] bg-white font-bold">Admin Assign</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center">

        <div className="grid grid-cols-2 gap-1 items-center">
          <div className="flex font-bold">Admin Name : </div>
          <input type="text" name="name" value={details.name} onChange={handleChange} required />
          <div className="flex font-bold">Department : </div>
          <input type="text" name="department" value={details.department} onChange={handleChange} required />
          <div className="flex font-bold">Email : </div>
          <input type="text" name="email" value={details.email} onChange={handleChange} required />
          <div className="flex font-bold">Password : </div>
          <input type="text" name="password" value={details.password} onChange={handleChange} required />
          <div className="flex font-bold">Access Level : </div>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="accessLevel"
            value={details.accessLevel}
            onChange={handleChange}
            required
          >
            <option value="">Select Access Level</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <div className="flex font-bold">Address : </div>
          <input type="text" name="address" value={details.address} onChange={handleChange} required />
        </div>
        <div className="flex pt-2">
          <Button variant="contained"
            onClick={handleOpen}>
            Assign
          </Button>
        </div>
        <Dialog
          open={openAlert}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Add New admin?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {details.name}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>No</Button>
            <Button onClick={handleSubmit}>Yes</Button>
          </DialogActions>
        </Dialog>

        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={openSnack}
          onClose={handleSnackClose}
          autoHideDuration={1800}
        >
          <Alert
            onClose={handleSnackClose}
            severity={snackMessage.severity}
            variant="filled"
            sx={{ width: '100%' }}
          >{snackMessage.message}
          </Alert>
        </Snackbar>
      </form>
    </div>

  );
};

export default DetailsForm;