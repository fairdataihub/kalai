import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  const mediumInter = await fetch(
    new URL("../../assets/Inter-Medium.otf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const semiBoldInter = await fetch(
    new URL("../../assets/Inter-SemiBold.otf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const boldInter = await fetch(
    new URL("../../assets/Inter-Bold.otf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const { searchParams } = req.nextUrl;

  const title = searchParams.get("title") || "";
  const description = searchParams.get("description") || "";
  const app = searchParams.get("app");
  const queryOrg = searchParams.get("org") || "fairdataihub";

  let appText = "FAIR Data Innovations Hub";
  let backgroundImage =
    "https://kalai.fairdataihub.org/fairdataihubBackground.svg";

  switch (app) {
    case "fairshare":
      appText = "FAIRshare";
      backgroundImage =
        "https://kalai.fairdataihub.org/fairshareBackground.svg";
      break;
    case "soda-for-sparc":
      appText = "SODA for SPARC";
      backgroundImage = "https://kalai.fairdataihub.org/sodaBackground.svg";
      break;
    case "ai-readi":
      appText = "";
      backgroundImage = "https://kalai.fairdataihub.org/aireadiBackground.svg";
      break;
    default:
      appText = "";
      break;
  }

  let org = {
    name: "FAIR Data Innovations Hub",
    github: true,
    twitter: true,
    social: "@fairdataihub",
  };

  switch (queryOrg) {
    case "ai-readi":
      org = {
        name: "Artificial Intelligence Ready and Equitable Atlas for Diabetes Insights",
        github: true,
        twitter: false,
        social: "@ai-readi",
      };
      break;
    case "fair-biors":
      org = {
        name: "FAIR Biomedical Research Software",
        github: true,
        twitter: false,
        social: "@fair-biors",
      };
      break;
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "flex-start",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "white",
          fontFamily: '"Inter"',
        }}
        className="frame"
      >
        <img
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            objectFit: "contain",
            filter: "blur(11px) saturate(100%)",
          }}
          src={backgroundImage}
        />

        <div
          style={{
            width: "100%",
            paddingTop: "56",
            paddingRight: "56",
            paddingLeft: "56",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
          className="top-container"
        >
          <span
            style={{
              fontSize: 48,
              fontWeight: 700,
              textAlign: "left",
            }}
            className="title-text"
          >
            {title}
          </span>

          <span
            style={{
              padding: 5,
              fontSize: 30,
              fontWeight: 500,
              textAlign: "left",
            }}
            className="description-text"
          >
            {description}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            paddingBottom: "56",
            paddingLeft: "56",
            paddingRight: "56",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
          className="bottom-container"
        >
          <span
            style={{
              fontSize: 28,
              fontWeight: 600,
            }}
            className="app-text"
          >
            {appText}
          </span>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
            className="social-org-container"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 15,
              }}
              className="social-org-container"
            >
              {org.twitter && (
                <svg
                  viewBox="0 0 24 24"
                  width="30"
                  height="30"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  style={{
                    marginLeft: 5,
                    marginRight: 5,
                  }}
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              )}

              <svg
                viewBox="0 0 24 24"
                width="30"
                height="30"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                style={{
                  marginLeft: 5,
                  marginRight: 5,
                }}
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>

              <span
                style={{
                  width: 3,
                  marginLeft: 10,
                  marginRight: 10,
                  height: "100%",
                  backgroundColor: "slategray",
                }}
              ></span>

              <span
                style={{
                  fontSize: 33,
                  textAlign: "right",
                  fontWeight: 500,
                }}
                className="social-text"
              >
                {org.social}
              </span>
            </div>

            <span
              style={{
                fontSize: 38,
                textAlign: "right",
                fontWeight: 700,
                maxWidth: 700,
              }}
              className="org-text"
            >
              {org.name}
            </span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: mediumInter,
          style: "normal",
          weight: 500,
        },
        {
          name: "Inter",
          data: semiBoldInter,
          style: "normal",
          weight: 600,
        },
        {
          name: "Inter",
          data: boldInter,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
