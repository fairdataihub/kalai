<div
  style={{
    display: "flex",
    height: "100%",
    width: "100%",
    alignItems: "flex-start",
    flexDirection: "column",
    justifyContent: "space-between",
    background: "white",
    backgroundImage:
      "radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)",
    backgroundSize: "100px 100px",
  }}
  class="frame"
>
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
    class="top-container"
  >
    <span
      style={{
        fontSize: 48,
        fontWeight: 800,
        textAlign: "left",
      }}
      class="title-text"
    >
      Title
    </span>

    <span
      style={{
        padding: 5,
        fontSize: 30,
        fontWeight: 500,
        textAlign: "left",
      }}
      class="description-text"
    >
      Description
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
    class="bottom-container"
  >
    <span
      style={{
        fontSize: 28,
        fontWeight: 600,
      }}
      class="app-text"
    >
      App Text
    </span>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
      class="social-org-container"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
        class="social-org-container"
      >
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
            backgroundColor: "black",
          }}
        ></span>

        <span
          style={{
            fontSize: 33,
            textAlign: "right",
          }}
          class="social-text"
        >
          social
        </span>
      </div>

      <span
        style={{
          fontSize: 38,
          textAlign: "right",
        }}
        class="org-text"
      >
        ORG
      </span>
    </div>
  </div>
</div>;
