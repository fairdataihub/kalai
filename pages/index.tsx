import Head from "next/head";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Index() {
  const [imageSource, setImageSource] = React.useState(
    `http://kalai.fairdataihub.org/api/generate?title=Hello!&description=Kalai%20is%20a%20thumbnail-generation%20service%20for%20fairdataihub&app=fairdataihub&org=fairdataihub`
  );
  const [showSpinner, setShowSpinner] = React.useState(false);
  const [imageURL, setImageURL] = React.useState(
    `http://kalai.fairdataihub.org/api/generate?title=Hello!&description=Kalai%20is%20a%20thumbnail-generation%20service%20for%20fairdataihub&app=fairdataihub&org=fairdataihub`
  );

  const [timer, setTimer] = React.useState("");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(imageURL);

    toast.success("Copied to clipboard!");
  };

  const handleSubmit = async (event) => {
    setShowSpinner(true);
    event.preventDefault();

    // Get data from the form.
    const data = {
      title: event.target.title.value,
      description: event.target.description.value,
      app:
        event.target.app.value === "custom"
          ? event.target.customApp.value
          : event.target.app.value,
      org: event.target.org.value,
    };

    setTimer("");
    const start = Date.now();

    // Send the form data to our API.
    const response = await fetch(
      `/api/generate/?` +
        new URLSearchParams({
          title: data.title,
          description: data.description,
          app: data.app,
          org: data.org,
        })
    );

    const apiResponseEnd = Date.now();

    setTimer(`Elapsed time: ${apiResponseEnd - start}ms`);

    setImageURL(response.url);

    // display the image
    const image = await response.blob();
    const imageSrc = URL.createObjectURL(image);
    setImageSource(imageSrc);

    setShowSpinner(false);
  };

  return (
    <div className="flex h-screen flex-col justify-between">
      <Head>
        <meta name="og:title" content="Kalai" />
        <meta
          name="og:description"
          content="Generate thumbnails for fairdataihub projects"
        />
        <meta
          name="og:image"
          content="https://kalai.fairdataihub.org/api/generate?title=FAIR%20Data%20Innovations%20Hub&description=Making%20FAIR%20data%20practices%20more%20accessible"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col-reverse justify-evenly pt-16 md:flex-row">
        <div className="form-container px-12">
          <h1 className="my-3 text-3xl font-bold">Preview</h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-3 flex w-[400px] flex-col">
              <label htmlFor="title" className="mb-1">
                Title
              </label>

              <input type="text" id="title" name="title" required />
            </div>

            <div className="mb-3 flex w-[400px] flex-col">
              <label htmlFor="description" className="mb-1">
                Description
              </label>

              <textarea rows={3} id="description" name="description" />
            </div>

            <div className="mb-3 flex w-[400px] flex-col">
              <label htmlFor="app" className="mb-1">
                Application
              </label>

              <select
                name="app"
                id="app"
                required
                defaultValue={`fairdataihub`}
                onChange={(e) => {
                  if (e.target.value === "custom") {
                    document.getElementById("customApp").style.display =
                      "block";
                  } else {
                    document.getElementById("customApp").style.display = "none";
                  }
                }}
              >
                <option value="fairdataihub">fairdataihub</option>

                <option value="soda-for-sparc">SODA for SPARC</option>

                <option value="fairshare">FAIRshare</option>

                <option value="ai-readi">AI-READI</option>

                <option value="ai-readi-docs">AI-READI Documentation</option>

                <option value="fair-biors">FAIR-BioRS</option>

                <option value="fairhub">Fairhub</option>

                <option value="fairhub-docs">Fairhub Documentation</option>

                <option value="eyeact">Eye ACT</option>

                <option value="codefair">codefair</option>

                <option value="custom">Custom</option>
              </select>
            </div>

            <div
              id="customApp"
              style={{
                display: "none",
              }}
            >
              <div className="mb-3 flex w-[400px] flex-col">
                <label htmlFor="customApp" className="mb-1">
                  Custom Application
                </label>

                <input type="text" id="customApp" name="customApp" />
              </div>
            </div>

            <div className="mb-3 flex w-[400px] flex-col">
              <label htmlFor="org" className="mb-1">
                Organization
              </label>

              <select
                name="org"
                id="org"
                required
                defaultValue={`fairdataihub`}
              >
                <option value="fairdataihub">fairdataihub</option>

                <option value="ai-readi">AI-READI</option>

                <option value="eyeact">Eye ACT</option>

                <option value="fair-biors">FAIR-BioRS</option>
              </select>
            </div>

            <div className="flex flex-row items-center space-x-2 mt-10">
              <button
                type="submit"
                className=" rounded border-b-4 border-blue-700 bg-blue-500 py-2 px-4 font-bold text-white transition-all hover:border-blue-500 hover:bg-blue-400 flex items-center justify-center space-x-3 "
              >
                {showSpinner && <span className={`loader mx-2`}></span>}
                Submit
              </button>

              {timer && <p className="text-sm text-gray-500">{timer}</p>}
            </div>
          </form>
        </div>

        <div className="imageContainer flex flex-col px-12 py-12 md:py-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSource}
            alt="preview"
            className="border border-solid"
          />

          <div className="relative my-2 w-full break-all flex space-x-3 justify-between rounded-md bg-slate-100 p-2 ">
            <p className="text-sm font-medium ">{imageURL}</p>

            {imageURL && (
              <button
                className="rounded border-b-4 border-blue-700 bg-blue-500 py-2 px-4 font-bold text-white transition-all hover:border-blue-500 hover:bg-blue-400 flex items-center justify-center space-x-3 w-ato"
                onClick={copyToClipboard}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 rounded-md hover:cursor-pointer hover:bg-slate-300 active:translate-y-1 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                  />
                </svg>

                <p className="w-content whitespace-pre">Copy URL</p>
              </button>
            )}
          </div>
        </div>
      </main>

      <ToastContainer />

      <footer className="flex justify-center py-4 text-base font-normal">
        <div className="mt-3 flex h-full flex-col items-center justify-center space-y-4 space-x-0 divide-x-2 divide-none divide-gray-200 py-5 md:flex-row md:space-y-0 md:space-x-4 md:divide-solid">
          <div className="text-center text-gray-500">
            <p>© 2022 FAIR Data Innovations Hub.</p>

            <p>All rights reserved.</p>
          </div>

          <div className="mt-0 flex flex-row items-center justify-center">
            <a
              href="https://vercel.com/?utm_source=fairdataihub&utm_campaign=oss"
              target="_blank"
              rel="noreferrer"
              className="mx-0 md:mx-4"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg"
                alt="Powered by Vercel"
                className="w-40"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
