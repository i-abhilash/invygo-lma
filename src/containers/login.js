import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Flex,
  CircularProgress,
  useToast
} from "@chakra-ui/core";
import { apiSendOtp, apiLogin } from "../api";
import { isLoggedIn, setLoggedInUser } from "../auth";

export default () => {
  const [mobile, setMobile] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState(null);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  function sendOTP() {
    setLoading(true);
    apiSendOtp(mobile).then(() => {
      toast({
        title: "Otp sent.",
        description: "We've sent an otp to your mobile.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setShowOtp(true);
      setLoading(false);
    }).catch(err => {
      setLoading(false);
      toast({
        title: "Cannot send otp",
        description: "Please contact Invygo.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    })
  }

  function login() {
    setLoading(true);
    apiLogin(mobile, otp).then((user) => {
      setLoggedInUser(user);
      setLoading(false);
    }).catch(err => {
      setLoading(false);
      toast({
        title: "Failed",
        description: "Please enter correct OTP",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    })
  }

  if (isLoggedIn()) {
    return (<Redirect to='/dashboard' />)
  }
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      minHeight="400px"
      bg="#ccc"
      mt='20%'
    >
      {loading && <CircularProgress isIndeterminate color="green"></CircularProgress>}
      <FormControl>
        <FormLabel htmlFor="mobile" mb='4%'>Mobile Number</FormLabel>
        <Input
          name="mobile"
          placeholder="Enter Mobile Number"
          type="number"
          onChange={e => setMobile(e.target.value)}
        />
      </FormControl>
      {!showOtp && <Button mt={4} variantColor="teal" onClick={sendOTP}>
        Send Otp
      </Button>}
      {showOtp && <><FormControl>
        <FormLabel htmlFor="number" mt='4%'>OTP</FormLabel>
        <Input
          name="otp"
          placeholder="Enter OTP Received"
          type="number"
          max="9999"
          onChange={e => setOtp(e.target.value)}
        />
      </FormControl>
        <Button mt={4} variantColor="teal" onClick={login}>
          Login
      </Button></>}
    </Flex>
  );
}