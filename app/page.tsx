"use client";
import { useState } from "react";
import { runAI } from "@/actions/ai";
import { Button } from "@/components/ui/button";

export default function Page() {
  // state
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const data = await runAI("Write a short zen tale");
      setResponse(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button onClick={handleClick}>Run AI</Button>
      <hr />
      <div>{loading ? "Loading..." : response}</div>
    </>
  );
}
