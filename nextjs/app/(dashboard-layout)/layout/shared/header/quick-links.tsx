"use client";
import Link from "next/link";
import React from "react";
import * as QuicklinksData from "./data";

const Quicklinks = () => {
  return (
    <div className="lg:p-5 p-5 xl:border-s border-s-0 border-border">
      <h5 className="text-xl font-semibold mb-4 text-muted-foreground">
        Quick Links
      </h5>
      <ul>
        {QuicklinksData.pageLinks.map((links, index) => (
          <li className="mb-4" key={index}>
            <Link
              href={links.href}
              className="text-sm font-semibold text-muted-foreground hover:text-primary dark:hover:text-primary"
            >
              {links.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quicklinks;
