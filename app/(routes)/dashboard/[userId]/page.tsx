"use client";

import { Button } from "@/components/ui/button";
import { LoginLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import React from "react";

function User({ params }: { params: { userId: string } }) {
  const { isAuthenticated } = useKindeBrowserClient();

  return isAuthenticated ? (
    <div>{params.userId}</div>
  ) : (
    <div>
      You have to{" "}
      <LoginLink>
        <Button>Login</Button>
      </LoginLink>{" "}
      to see this page
    </div>
  );
}

export default User;
