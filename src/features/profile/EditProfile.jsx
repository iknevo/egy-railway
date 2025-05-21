import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import LoaderMini from "../../ui/LoaderMini";
import { useUser } from "../Authentication/useUser";
import { useUpdateUser } from "./useUpdateUser";

export default function EditProfile() {
  const navigate = useNavigate();
  const { updateUser, isUpdating } = useUpdateUser();
  const {
    user: { email, user_metadata: { full_name: currentFullName, phone } = {} },
  } = useUser();
  const [firstName, setFirstName] = useState(
    currentFullName?.split(" ").at(0) || "",
  );
  const [phoneNumber, setPhoneNumber] = useState(phone);
  const [lastName, setLastName] = useState(
    currentFullName?.split(" ").at(1) || "",
  );
  const [avatar, setAvatar] = useState(null);
  const full_name = [firstName, lastName].join(" ");
  function handleSubmit(e) {
    e.preventDefault();
    if (!full_name) return;
    updateUser(
      { full_name, avatar, phone: phoneNumber },
      {
        onSuccess: () => {
          navigate("/user/profile");
        },
      },
    );
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="flex flex-col gap-10">
        <p className="text-3xl font-semibold">Edit Profile</p>
        <div className="grid grid-cols-2 items-start gap-10">
          <FormControl variant="outlined">
            <InputLabel
              htmlFor="firstName"
              sx={{
                fontSize: "16px",
                "&.Mui-focused": { color: "#46a358" },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#46a358",
                },
              }}
            >
              First Name
            </InputLabel>
            <OutlinedInput
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              inputlabelprops={{ shrink: Boolean(firstName) || undefined }}
              id="firstName"
              type="text"
              label="First Name"
              sx={{
                fontSize: "16px",
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#46a358", // Default border color
                },
              }}
            />
          </FormControl>

          <FormControl variant="outlined">
            <InputLabel
              htmlFor="LastName"
              sx={{
                fontSize: "16px",
                "&.Mui-focused": { color: "#46a358" },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#46a358",
                },
              }}
            >
              Last Name
            </InputLabel>
            <OutlinedInput
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              inputlabelprops={{ shrink: Boolean(lastName) || undefined }}
              id="lastName"
              type="text"
              label="Last Name"
              sx={{
                fontSize: "16px",
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#46a358",
                },
              }}
            />
          </FormControl>

          <FormControl variant="outlined">
            <InputLabel
              htmlFor="email"
              sx={{
                fontSize: "16px",
                "&.Mui-focused": { color: "#46a358" },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#46a358",
                },
              }}
            >
              Email Address
            </InputLabel>
            <OutlinedInput
              value={email}
              inputlabelprops={{
                shrink: Boolean(email) || undefined,
              }}
              id="email"
              type="email"
              label="Email Address"
              disabled={true}
              sx={{
                fontSize: "16px",
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#46a358",
                },
              }}
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
            />
          </FormControl>

          <FormControl variant="outlined">
            <InputLabel
              htmlFor="phone"
              sx={{
                fontSize: "16px",
                "&.Mui-focused": { color: "#46a358" },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#46a358",
                },
              }}
            >
              Phone Number
            </InputLabel>
            <OutlinedInput
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              inputlabelprops={{ shrink: Boolean(phoneNumber) || undefined }}
              id="phone"
              type="text"
              label="Phone Number"
              sx={{
                fontSize: "16px",
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#46a358", // Default border color
                },
              }}
            />
          </FormControl>

          <div className="relative">
            <span className="absolute -top-5 left-4 block bg-white px-2">
              Avatar
            </span>
            <input
              className="text-md block w-full cursor-pointer rounded-sm border border-gray-400 bg-white px-2 py-4 text-gray-900 focus:outline-none"
              type="file"
              onChange={(e) => setAvatar(e.target.files[0])}
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="flex cursor-pointer items-center gap-2 rounded-md bg-gradient-to-r from-cyan-600 to-blue-600 px-3 py-1 font-semibold text-white md:px-4 md:py-2"
      >
        {isUpdating ? <LoaderMini /> : "Save Changes"}
      </button>
    </form>
  );
}
