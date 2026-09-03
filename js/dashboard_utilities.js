console.log("utilities.js is connected!");
/* =========================================
   ELEMENTS
========================================= */

const searchInput =
    document.getElementById("searchInput");

const toolCards =
    document.querySelectorAll(".tool-card");

const noResults =
    document.getElementById("noResults");

const launchButtons =
    document.querySelectorAll(".launch-btn");

const modal =
    document.getElementById("toolModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalContent =
    document.getElementById("modalContent");

const modalClose =
    document.getElementById("modalClose");

const themeToggle =
    document.getElementById("themeToggle");


/* =========================================
   DARK MODE TOGGLE
========================================= */

themeToggle.addEventListener(
    "change",
    function () {

        document.body.classList.toggle(
            "dark",
            this.checked
        );

    }
);


/* =========================================
   SEARCH
========================================= */

searchInput.addEventListener(
    "input",
    function () {

        const searchValue =
            this.value
                .toLowerCase()
                .trim();

        let visibleTools = 0;


        toolCards.forEach(
            function (card) {

                const name =
                    card.dataset.name
                        .toLowerCase();

                const category =
                    card.dataset.category
                        .toLowerCase();


                const matches =
                    name.includes(searchValue) ||
                    category.includes(searchValue);


                if (matches) {

                    card.style.display =
                        "flex";

                    visibleTools++;

                } else {

                    card.style.display =
                        "none";

                }

            }
        );


        if (
            visibleTools === 0 &&
            searchValue.length > 0
        ) {

            noResults.classList.add(
                "show"
            );

        } else {

            noResults.classList.remove(
                "show"
            );

        }

    }
);


/* =========================================
   LAUNCH BUTTONS
========================================= */

launchButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const tool =
                    this.dataset.tool;

                openTool(tool);

            }
        );

    }
);


/* =========================================
   OPEN TOOL
========================================= */

function openTool(tool) {

    modal.classList.add("open");


    /* =====================================
       BASE64
    ====================================== */

    if (tool === "base64") {

        modalTitle.textContent =
            "Base64 Encoder / Decoder";

        modalContent.innerHTML = `

            <textarea
                class="tool-input"
                id="base64Input"
                placeholder="Enter text..."
            ></textarea>

            <div class="tool-actions">

                <button
                    class="tool-action-button"
                    id="base64Encode"
                >
                    ENCODE
                </button>

                <button
                    class="tool-action-button"
                    id="base64Decode"
                >
                    DECODE
                </button>

            </div>

            <div
                class="tool-output"
                id="base64Output"
            >
                Result will appear here.
            </div>

        `;


        document
            .getElementById("base64Encode")
            .addEventListener(
                "click",
                encodeBase64
            );


        document
            .getElementById("base64Decode")
            .addEventListener(
                "click",
                decodeBase64
            );

    }


    /* =====================================
       SHA-256
    ====================================== */

    else if (tool === "sha256") {

        modalTitle.textContent =
            "SHA-256 Hash Generator";

        modalContent.innerHTML = `

            <input
                class="tool-input tool-single-input"
                id="hashInput"
                placeholder="Enter text..."
            >

            <div class="tool-actions">

                <button
                    class="tool-action-button"
                    id="generateHash"
                >
                    GENERATE HASH
                </button>

            </div>

            <div
                class="tool-output"
                id="hashOutput"
            >
                SHA-256 result will appear here.
            </div>

        `;


        document
            .getElementById("generateHash")
            .addEventListener(
                "click",
                generateSHA256
            );

    }


    /* =====================================
       JWT
    ====================================== */

    else if (tool === "jwt") {

        modalTitle.textContent =
            "JWT Decoder";

        modalContent.innerHTML = `

            <textarea
                class="tool-input"
                id="jwtInput"
                placeholder="Paste JWT token..."
            ></textarea>

            <div class="tool-actions">

                <button
                    class="tool-action-button"
                    id="decodeJWT"
                >
                    DECODE
                </button>

            </div>

            <div
                class="tool-output"
                id="jwtOutput"
            >
                Decoded JWT will appear here.
            </div>

        `;


        document
            .getElementById("decodeJWT")
            .addEventListener(
                "click",
                decodeJWT
            );

    }


    /* =====================================
       URL
    ====================================== */

    else if (tool === "url") {

        modalTitle.textContent =
            "URL Encoder / Decoder";

        modalContent.innerHTML = `

            <textarea
                class="tool-input"
                id="urlInput"
                placeholder="Enter URL or text..."
            ></textarea>

            <div class="tool-actions">

                <button
                    class="tool-action-button"
                    id="urlEncode"
                >
                    ENCODE
                </button>

                <button
                    class="tool-action-button"
                    id="urlDecode"
                >
                    DECODE
                </button>

            </div>

            <div
                class="tool-output"
                id="urlOutput"
            >
                Result will appear here.
            </div>

        `;


        document
            .getElementById("urlEncode")
            .addEventListener(
                "click",
                encodeURL
            );


        document
            .getElementById("urlDecode")
            .addEventListener(
                "click",
                decodeURL
            );

    }


    /* =====================================
       REGEX
    ====================================== */

    else if (tool === "regex") {

        modalTitle.textContent =
            "Regex Tester";

        modalContent.innerHTML = `

            <input
                class="tool-input tool-single-input"
                id="regexPattern"
                placeholder="Regular expression, e.g. ^[A-Z]+$"
            >

            <textarea
                class="tool-input"
                id="regexText"
                placeholder="Text to test..."
                style="margin-top: 10px;"
            ></textarea>

            <div class="tool-actions">

                <button
                    class="tool-action-button"
                    id="testRegex"
                >
                    TEST REGEX
                </button>

            </div>

            <div
                class="tool-output"
                id="regexOutput"
            >
                Regex result will appear here.
            </div>

        `;


        document
            .getElementById("testRegex")
            .addEventListener(
                "click",
                testRegex
            );

    }


    /* =====================================
       PASSWORD
    ====================================== */

    else if (tool === "password") {

        modalTitle.textContent =
            "Password Strength";

        modalContent.innerHTML = `

            <input
                class="tool-input tool-single-input"
                id="passwordInput"
                type="password"
                placeholder="Enter password..."
            >

            <div class="tool-actions">

                <button
                    class="tool-action-button"
                    id="checkPassword"
                >
                    CHECK STRENGTH
                </button>

            </div>

            <div
                class="tool-output"
                id="passwordOutput"
            >
                Password strength will appear here.
            </div>

        `;


        document
            .getElementById("checkPassword")
            .addEventListener(
                "click",
                checkPasswordStrength
            );

    }

}


/* =========================================
   CLOSE MODAL
========================================= */

function closeModal() {

    modal.classList.remove("open");

    modalContent.innerHTML = "";

}


modalClose.addEventListener(
    "click",
    closeModal
);


modal.addEventListener(
    "click",
    function (event) {

        if (event.target === modal) {

            closeModal();

        }

    }
);


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            modal.classList.contains("open")
        ) {

            closeModal();

        }

    }
);


/* =========================================
   BASE64 ENCODE
========================================= */

function encodeBase64() {

    const input =
        document
            .getElementById("base64Input")
            .value;

    const output =
        document
            .getElementById("base64Output");


    try {

        const bytes =
            new TextEncoder()
                .encode(input);

        let binary = "";

        bytes.forEach(
            byte => {
                binary += String.fromCharCode(byte);
            }
        );

        output.textContent =
            btoa(binary);

    } catch (error) {

        output.textContent =
            "Unable to encode input.";

    }

}


/* =========================================
   BASE64 DECODE
========================================= */

function decodeBase64() {

    const input =
        document
            .getElementById("base64Input")
            .value
            .trim();

    const output =
        document
            .getElementById("base64Output");


    try {

        const binary =
            atob(input);

        const bytes =
            Uint8Array.from(
                binary,
                char => char.charCodeAt(0)
            );

        output.textContent =
            new TextDecoder().decode(bytes);

    } catch (error) {

        output.textContent =
            "Invalid Base64 input.";

    }

}


/* =========================================
   SHA-256
========================================= */

async function generateSHA256() {

    const input =
        document
            .getElementById("hashInput")
            .value;

    const output =
        document
            .getElementById("hashOutput");


    try {

        const encoder =
            new TextEncoder();

        const data =
            encoder.encode(input);

        const hash =
            await crypto.subtle.digest(
                "SHA-256",
                data
            );

        const hashArray =
            Array.from(
                new Uint8Array(hash)
            );

        const hashHex =
            hashArray
                .map(
                    byte =>
                        byte
                            .toString(16)
                            .padStart(2, "0")
                )
                .join("");

        output.textContent =
            hashHex;

    } catch (error) {

        output.textContent =
            "Unable to generate hash.";

    }

}


/* =========================================
   JWT DECODER
========================================= */

function decodeJWT() {

    const input =
        document
            .getElementById("jwtInput")
            .value
            .trim();

    const output =
        document
            .getElementById("jwtOutput");


    try {

        const parts =
            input.split(".");


        if (parts.length !== 3) {

            throw new Error(
                "Invalid JWT"
            );

        }


        const header =
            JSON.parse(
                base64UrlDecode(parts[0])
            );


        const payload =
            JSON.parse(
                base64UrlDecode(parts[1])
            );


        output.textContent =
            JSON.stringify(
                {
                    header: header,
                    payload: payload
                },
                null,
                2
            );

    } catch (error) {

        output.textContent =
            "Invalid JWT token.";

    }

}


/* =========================================
   JWT BASE64URL
========================================= */

function base64UrlDecode(value) {

    let base64 =
        value
            .replace(/-/g, "+")
            .replace(/_/g, "/");


    while (
        base64.length % 4 !== 0
    ) {

        base64 += "=";

    }


    const binary =
        atob(base64);


    const bytes =
        Uint8Array.from(
            binary,
            char => char.charCodeAt(0)
        );


    return new TextDecoder().decode(bytes);

}


/* =========================================
   URL ENCODE
========================================= */

function encodeURL() {

    const input =
        document
            .getElementById("urlInput")
            .value;

    const output =
        document
            .getElementById("urlOutput");


    output.textContent =
        encodeURIComponent(input);

}


/* =========================================
   URL DECODE
========================================= */

function decodeURL() {

    const input =
        document
            .getElementById("urlInput")
            .value;

    const output =
        document
            .getElementById("urlOutput");


    try {

        output.textContent =
            decodeURIComponent(input);

    } catch (error) {

        output.textContent =
            "Invalid encoded URL.";

    }

}


/* =========================================
   REGEX TESTER
========================================= */

function testRegex() {

    const pattern =
        document
            .getElementById("regexPattern")
            .value;

    const text =
        document
            .getElementById("regexText")
            .value;

    const output =
        document
            .getElementById("regexOutput");


    try {

        const regex =
            new RegExp(pattern);

        const match =
            regex.test(text);


        if (match) {

            output.textContent =
                "MATCH FOUND";

        } else {

            output.textContent =
                "NO MATCH";

        }

    } catch (error) {

        output.textContent =
            "Invalid regular expression.";

    }

}


/* =========================================
   PASSWORD STRENGTH
========================================= */

function checkPasswordStrength() {

    const password =
        document
            .getElementById("passwordInput")
            .value;

    const output =
        document
            .getElementById("passwordOutput");


    let score = 0;


    if (password.length >= 8) {
        score++;
    }

    if (password.length >= 12) {
        score++;
    }

    if (/[a-z]/.test(password)) {
        score++;
    }

    if (/[A-Z]/.test(password)) {
        score++;
    }

    if (/[0-9]/.test(password)) {
        score++;
    }

    if (/[^A-Za-z0-9]/.test(password)) {
        score++;
    }


    let strength;


    if (password.length === 0) {

        strength = "EMPTY";

    } else if (score <= 2) {

        strength = "WEAK";

    } else if (score <= 4) {

        strength = "MEDIUM";

    } else {

        strength = "STRONG";

    }


    output.textContent =
        "Password strength: " +
        strength;

}