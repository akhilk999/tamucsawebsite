import { Metadata } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const OfficerPage = () => {
    return (
        <div>Officers!</div>
    );
}

export const metadata: Metadata = {
  title: "TAMU CSA - Officers",
  description: "Meet the officers of the Chinese Student Association at TAMU!",
};

export default OfficerPage;