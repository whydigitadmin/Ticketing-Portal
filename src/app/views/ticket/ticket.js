import { Tooltip } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
// import { AiOutlineSearch, AiOutlineWallet } from 'react-icons/ai';
// import { BsListTask } from 'react-icons/bs';
import ClearIcon from "@mui/icons-material/Clear";
import FormatListBulletedTwoToneIcon from "@mui/icons-material/FormatListBulletedTwoTone";
import SaveIcon from "@mui/icons-material/Save";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, ButtonBase } from "@mui/material";
import { useRef } from "react";
import "react-tabs/style/react-tabs.css";

const Ticket = () => {
  //   const buttonStyle = {
  //     fontSize: '20px' // Adjust the font size as needed save
  //   };
  const theme = useTheme();
  const anchorRef = useRef(null);

  return (
    <>
      <div className="card w-full p-6 bg-base-100 shadow-xl" style={{ padding: "20px" }}>
        <div className="row d-flex mt-3 ml">
          <div
            className="d-flex flex-wrap justify-content-start mb-4"
            style={{ marginBottom: "20px" }}
          >
            <Tooltip title="Search" placement="top">
              <ButtonBase sx={{ borderRadius: "12px", marginRight: "10px" }}>
                <Avatar
                  variant="rounded"
                  sx={{
                    ...theme.typography.commonAvatar,
                    ...theme.typography.mediumAvatar,
                    transition: "all .2s ease-in-out",
                    background: theme.palette.primary.light,
                    color: theme.palette.primary.dark,
                    '&[aria-controls="menu-list-grow"],&:hover': {
                      background: theme.palette.primary.dark,
                      color: theme.palette.primary.light
                    }
                  }}
                  ref={anchorRef}
                  aria-haspopup="true"
                  color="inherit"
                >
                  <SearchIcon size="1.3rem" stroke={1.5} />
                </Avatar>
              </ButtonBase>
            </Tooltip>

            <Tooltip title="Clear" placement="top">
              {" "}
              <ButtonBase sx={{ borderRadius: "12px", marginRight: "10px" }}>
                <Avatar
                  variant="rounded"
                  sx={{
                    ...theme.typography.commonAvatar,
                    ...theme.typography.mediumAvatar,
                    transition: "all .2s ease-in-out",
                    background: theme.palette.primary.light,
                    color: theme.palette.primary.dark,
                    '&[aria-controls="menu-list-grow"],&:hover': {
                      background: theme.palette.primary.dark,
                      color: theme.palette.primary.light
                    }
                  }}
                  ref={anchorRef}
                  aria-haspopup="true"
                  color="inherit"
                >
                  <ClearIcon size="1.3rem" stroke={1.5} />
                </Avatar>
              </ButtonBase>
            </Tooltip>

            <Tooltip title="List View" placement="top">
              {" "}
              <ButtonBase sx={{ borderRadius: "12px" }}>
                <Avatar
                  variant="rounded"
                  sx={{
                    ...theme.typography.commonAvatar,
                    ...theme.typography.mediumAvatar,
                    transition: "all .2s ease-in-out",
                    background: theme.palette.primary.light,
                    color: theme.palette.primary.dark,
                    '&[aria-controls="menu-list-grow"],&:hover': {
                      background: theme.palette.primary.dark,
                      color: theme.palette.primary.light
                    }
                  }}
                  ref={anchorRef}
                  aria-haspopup="true"
                  color="inherit"
                >
                  <FormatListBulletedTwoToneIcon size="1.3rem" stroke={1.5} />
                </Avatar>
              </ButtonBase>
            </Tooltip>
            <Tooltip title="Save" placement="top">
              {" "}
              <ButtonBase sx={{ borderRadius: "12px", marginLeft: "10px" }}>
                <Avatar
                  variant="rounded"
                  sx={{
                    ...theme.typography.commonAvatar,
                    ...theme.typography.mediumAvatar,
                    transition: "all .2s ease-in-out",
                    background: theme.palette.primary.light,
                    color: theme.palette.primary.dark,
                    '&[aria-controls="menu-list-grow"],&:hover': {
                      background: theme.palette.primary.dark,
                      color: theme.palette.primary.light
                    }
                  }}
                  ref={anchorRef}
                  aria-haspopup="true"
                  color="inherit"
                >
                  <SaveIcon size="1.3rem" stroke={1.5} />
                </Avatar>
              </ButtonBase>
            </Tooltip>
          </div>
          <div className="col-md-4 mb-3">
            <TextField
              id="outlined-textarea"
              label="Chapter"
              placeholder="Placeholder"
              multiline
              variant="outlined"
              size="small"
              fullWidth
            />
          </div>
          <div className="col-md-4 mb-3">
            <TextField
              id="outlined-textarea"
              label="Sub Chapter"
              placeholder="Placeholder"
              multiline
              variant="outlined"
              size="small"
              fullWidth
            />
          </div>

          <div className="col-md-4 mb-3">
            <TextField
              id="outlined-textarea"
              label="HSN Code"
              placeholder="Placeholder"
              multiline
              variant="outlined"
              size="small"
              fullWidth
            />
          </div>
          <div className="col-md-4 mb-3">
            <TextField
              id="Old Rate"
              label="Branch/Location"
              placeholder="Placeholder"
              multiline
              variant="outlined"
              size="small"
              fullWidth
            />
          </div>
          <div className="col-md-4 mb-3">
            <TextField
              id="outlined-textarea"
              label="New Rate"
              placeholder="Placeholder"
              multiline
              variant="outlined"
              size="small"
              fullWidth
            />
          </div>
          <div className="col-md-4 mb-3">
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">Excepmted</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Excepmted"
                // onChange={handleChange}
              >
                <MenuItem value="0">Yes</MenuItem>
                <MenuItem value="1">No</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </>
  );
};
export default Ticket;
