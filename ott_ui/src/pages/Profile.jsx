import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Profile.scss";
import { FaRegUserCircle, FaEdit, FaHeart } from "react-icons/fa";
import { MdOutlineSubscriptions, MdOutlineHistoryEdu, MdOutlineWatchLater } from "react-icons/md";
import { IoSettingsSharp, IoLogOutSharp } from "react-icons/io5";
import { BiSolidRightArrow } from "react-icons/bi";
import { Button, Card, List, ListItem, ListItemIcon, ListItemText, Typography, Avatar } from "@mui/material";

function Profile() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100" style={{ background: "#121212" }}>
      <Card className="p-4 shadow-lg" style={{ background: "#1e1e1e", borderRadius: "20px", width: "400px", color: "white" }}>
        <div className="text-center">
          <Avatar src="https://via.placeholder.com/100" alt="Profile" sx={{ width: 80, height: 80, margin: "auto" }} />
          <Typography variant="h5" className="mt-2">John Doe</Typography>
          <Button variant="outlined" startIcon={<FaEdit />} className="mt-2 text-white border-white">Edit Profile</Button>
        </div>
        
        <List component="nav" className="mt-4">
          <ListItem button className="rounded-3 bg-dark mb-2 text-white">
            <ListItemIcon>
              <MdOutlineSubscriptions color="white" />
            </ListItemIcon>
            <ListItemText primary="My Subscription" />
            <BiSolidRightArrow color="white" />
          </ListItem>

          <ListItem button className="rounded-3 bg-dark mb-2 text-white">
            <ListItemIcon>
              <MdOutlineWatchLater color="white" />
            </ListItemIcon>
            <ListItemText primary="Watch Later" />
            <BiSolidRightArrow color="white" />
          </ListItem>
          
          <ListItem button className="rounded-3 bg-dark mb-2 text-white">
            <ListItemIcon>
              <FaHeart color="red" />
            </ListItemIcon>
            <ListItemText primary="Favorites" />
            <BiSolidRightArrow color="white" />
          </ListItem>

          <ListItem button className="rounded-3 bg-dark mb-2 text-white">
            <ListItemIcon>
              <MdOutlineHistoryEdu color="white" />
            </ListItemIcon>
            <ListItemText primary="History" />
            <BiSolidRightArrow color="white" />
          </ListItem>

          <ListItem button className="rounded-3 bg-dark mb-2 text-white">
            <ListItemIcon>
              <IoSettingsSharp color="white" />
            </ListItemIcon>
            <ListItemText primary="Account Settings" />
            <BiSolidRightArrow color="white" />
          </ListItem>

          <ListItem button className="rounded-3 bg-danger text-white">
            <ListItemIcon>
              <IoLogOutSharp color="white" />
            </ListItemIcon>
            <ListItemText primary="Sign Out" />
            <BiSolidRightArrow color="white" />
          </ListItem>
        </List>
      </Card>
    </div>
  );
}

export default Profile;