import React, { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";
import Quagga from "quagga";
import { Box, Text } from "@chakra-ui/react";

const Scanner = () => {
  const webcamRef = useRef(null);
  const [code, setCode] = useState();
  useEffect(() => {
    const startScanner = () => {
      Quagga.init(
        {
          inputStream: {
            name: "Live",
            type: "LiveStream",
            target: webcamRef.current.video,
          },
          decoder: {
            readers: ["ean_reader", "code_128_reader"], // Add barcode types you want to support
          },
        },
        (err) => {
          if (err) {
            console.error(err);
            return;
          }
          Quagga.start();
        }
      );

      Quagga.onDetected((result) => {
        console.log("Barcode detected:", result.codeResult.code);
        setCode(result.codeResult.code);
      });
    };

    startScanner();

    return () => {
      Quagga.stop();
    };
  }, []);

  return (
    <Box display={"flex"} flexDir={"column"} justifyContent={"center"}>
      <Webcam
        ref={webcamRef}
        className="custom-webcam"
        videoConstraints={{ width: 300, height: 50, facingMode: "user" }}
      />
      <Text color={"black"} align={"center"}>
        {code}
      </Text>
    </Box>
  );
};

export default Scanner;
