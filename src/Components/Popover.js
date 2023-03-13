import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Badge } from "@mui/material";
import { useAuth } from "../utils/Auth";

export default function BasicPopover({ badgecontent, icon, content }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    const user = JSON.parse(localStorage.getItem(auth.user.Username));
    console.log(user);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const auth = useAuth();

  return (
    <div>
      <Badge badgeContent={badgecontent} color="error">
        <Button
          variant="outlined"
          startIcon={<icon sx={{ fontSize: 60, color: "rgb(0, 0, 255)" }} />}
          onClick={handleClick}
        >
          {content}
        </Button>
      </Badge>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div>
  );
}
