import PageTitle from "@/components/custom/page-title";
import TextEditor from "@/components/custom/text-editor";
import { getUser } from "@workos-inc/authkit-nextjs";
import Image from "next/image";
import React from "react";

const Admin = async () => {
  const { user, role, organizationId } = await getUser({
    ensureSignedIn: true,
  });

  if (role !== "admin" || process.env.WORKOS_ADMIN_ORG_ID !== organizationId) {
    return (
      <div className="flex justify-center items-center h-[90dvh]">
        <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Only admin can access this page
        </h2>
      </div>
    );
  }

  return (
    <div className="py-10">
      <Image
        unoptimized
        src={
          "https://autonomia.digital/images/Circumvent_censorship_blog_Onion_Services.png"
        }
        alt="dev"
        width="0"
        height="0"
        className="w-full h-96 object-cover"
      />
      <PageTitle title="Create Blog" />
      <TextEditor />
    </div>
  );
};

export default Admin;
