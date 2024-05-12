import PageTitle from "@/components/custom/page-title";
import TextEditor from "@/components/custom/text-editor";
import { getUser } from "@workos-inc/authkit-nextjs";
import { redirect } from "next/navigation";
import React from "react";

const Admin = async () => {
  const { user, role, organizationId } = await getUser({
    ensureSignedIn: true,
  });

  if (
    role !== "admin" ||
    process.env.WORKOS_ADMIN_ORG_ID !== organizationId ||
    !user
  ) {
    redirect("/");
  }

  return (
    <div className="py-10">
      <PageTitle title="Create Blog" />
      <TextEditor />
    </div>
  );
};

export default Admin;
