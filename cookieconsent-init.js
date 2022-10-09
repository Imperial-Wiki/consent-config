window.addEventListener('load', function () {
    // obtain cookieconsent plugin
    var cookieconsent = initCookieConsent();

    // run plugin with config object
    cookieconsent.run({
        autorun: true,
        current_lang: 'en',
        autoclear_cookies: true,
        page_scripts: true,
        force_consent: true, // forces the user to either opt-in or opt-out before proceeding to the website

        onFirstAction: function(user_preferences, cookie){
            // callback triggered only once
        },

        onAccept: function (cookie) {
            // ... cookieconsent accepted
        },

        onChange: function (cookie, changed_preferences) {
            // ... cookieconsent preferences were changed
        },

        gui_options: {
            consent_modal: {
                layout: 'cloud',               // box/cloud/bar
                position: 'middle center',     // bottom/middle/top + left/right/center
                transition: 'slide',           // zoom/slide
                swap_buttons: false            // enable to invert buttons
            },
            settings_modal: {
                layout: 'box',                 // box/bar
                // position: 'left',           // left/right
                transition: 'slide'            // zoom/slide
            }
        },

        languages: {
            en: {
                consent_modal: {
                    title: 'Data Protection',
                    description: `The wiki uses <a href="https://gdpr.eu/cookies/" target="_blank">strictly necessary cookies</a>
                    for user authentication and essential functionalities. 
                    To understand student-wiki interactions, we also implement statistics cookies; These cookies use a
                    <a href="https://www.privacy-regulation.eu/en/article-4-definitions-GDPR.htm" target="_blank">pseudonimised</a> 
                    identifier to ensure that data cannot be directly used to identify you. 
                    <br><br><a class="cc-link" href="https://imperialwiki.com/en/principles/analysis" target="_blank">Learn more</a> 
                    about how we use statistical analysis of usage to extract insights that could be used to improve your academic experience.
                    <br><br>Statistics cookies are implemented through a third-party service and will only be set after consent. 
                    For more details relevant to cookies, please read the full 
                    <a class="cc-link" href="https://imperialwiki.com/en/principles/collection" target="_blank">privacy policy</a>.
                    Your account name, email, date of creation, and last login time is recorded. This is built into Wiki.js
                    and does not involve cookies.`,
                    // <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>                   
                    primary_btn: {
                        text: 'Accept',
                        role: 'accept_all'              // 'accept_selected' or 'accept_all'
                    },
                    secondary_btn: {
                        text: 'Settings',
                        role: 'settings'                // 'settings' or 'accept_necessary'
                    }
                },
                settings_modal: {
                    title: 'Cookie preferences',
                    save_settings_btn: 'Save settings',
                    accept_all_btn: 'Accept all',
                    reject_all_btn: 'Reject all',       // optional, [v.2.5.0 +]
                    cookie_table_headers: [
                        {col1: 'Name'},
                        {col2: 'Domain'},
                        {col3: 'Expiration'},
                        {col4: 'Description'},
                        {col5: 'Type'}
                    ],
                    blocks: [
                        {
                            title: 'Cookie usage',
                            description: `The wiki uses cookies to ensure the basic functionalities of the website and to enhance your academic experience. 
                            You can choose for each category to opt-in/out whenever you want. 
                            For more details relevant to cookies and other sensitive data, 
                            please read the full <a href="https://imperialwiki.com/en/principles/collection" class="cc-link">privacy policy</a>.`
                        }, {
                            title: 'Strictly necessary cookies',
                            description: 'These cookies are essential for the proper functioning of the website. Without these cookies, the website would not work properly.',
                            toggle: {
                                value: 'necessary',
                                enabled: true,
                                readonly: true
                            }
                        }, {
                            title: 'Statistics cookies',
                            description: 'These cookies collect information about how you use the website, which pages you visited, and which links you clicked on. All of the data is pseudonymised and cannot directly be used to identify you.',
                            toggle: {
                                value: 'analytics',
                                enabled: false,
                                readonly: false
                            },
                            cookie_table: [
                                {
                                    col1: '^_ga',
                                    col2: 'google.com',
                                    col3: '2 years',
                                    col4: 'description ...',
                                    col5: 'Permanent cookie',
                                    is_regex: true
                                },
                                {
                                    col1: '_gid',
                                    col2: 'google.com',
                                    col3: '1 day',
                                    col4: 'description ...',
                                    col5: 'Permanent cookie'
                                }
                            ]
                        }, {
                            title: 'More information',
                            description: 'For any queries in relation to my policy on cookies and your choices, please <a class="cc-link" href="#yourwebsite">contact me</a>.',
                        }
                    ]
                }
            }
        }
    });
});
