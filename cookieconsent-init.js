window.addEventListener('load', function(){

    // obtain plugin
    var cc = initCookieConsent();

    // run plugin with your configuration
    cc.run({
        current_lang: 'en',
        autoclear_cookies: true,                   // default: false
        page_scripts: true,                        // default: false

        // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
        // delay: 0,                               // default: 0
        // auto_language: '',                      // default: null; could also be 'browser' or 'document'
        // autorun: true,                          // default: true
        force_consent: true,                   // default: false
        // hide_from_bots: false,                  // default: false
        // remove_cookie_tables: false             // default: false
        // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
        // cookie_expiration: 182,                 // default: 182 (days)
        // cookie_necessary_only_expiration: 182   // default: disabled
        // cookie_domain: location.hostname,       // default: current domain
        // cookie_path: '/',                       // default: root
        // cookie_same_site: 'Lax',                // default: 'Lax'
        // use_rfc_cookie: false,                  // default: false
        // revision: 0,                            // default: 0

        onFirstAction: function(user_preferences, cookie){
            // callback triggered only once on the first accept/reject action
        },

        onAccept: function (cookie) {
            // callback triggered on the first accept/reject action, and after each page load
        },

        onChange: function (cookie, changed_categories) {
            // callback triggered when user changes preferences after consent has already been given
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
            'en': {
                consent_modal: {
                    title: 'Data Protection',
                    description: `The wiki uses <a href="https://gdpr.eu/cookies/" target="_blank">strictly necessary cookies</a>
                    for user authentication and essential functionalities. 
                    To understand student-wiki interactions, we also implement statistics cookies; These cookies use a
                    <a href="https://www.privacy-regulation.eu/en/article-4-definitions-GDPR.htm" target="_blank">pseudonimised</a> 
                    identifier to ensure that data cannot be directly used to identify you. 
                    <br><br><a class="cc-link" href="https://imperialwiki.com/e/en/guidelines/analysis" target="_blank">Learn more</a> 
                    about how we use statistical analysis of usage to extract insights that could be used to improve your academic experience.
                    <br><br>Statistics cookies are implemented through a third-party service and will only be set after consent. 
                    For more details relevant to cookies, please read the full 
                    <a class="cc-link" href="https://imperialwiki.com/en/guidelines/privacy_policy" target="_blank">privacy policy</a>.`,
                    // <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>
                    primary_btn: {
                        text: 'Accept all',
                        role: 'accept_all'              // 'accept_selected' or 'accept_all'
                    },
                    secondary_btn: {
                        text: 'Reject (preferences)',
                        role: 'settings'        // 'settings' or 'accept_necessary'
                    }
                },
                settings_modal: {
                    title: 'Cookie preferences',
                    save_settings_btn: 'Save settings',
                    accept_all_btn: 'Accept all',
                    reject_all_btn: 'Reject all',
                    close_btn_label: 'Close',
                    cookie_table_headers: [
                        {col1: 'Name'},
                        {col2: 'Domain'},
                        {col3: 'Expiration'},
                        {col4: 'Description'}
                    ],
                    blocks: [
                        {
                            title: 'Cookie usage',
                            description: `The wiki uses cookies to ensure the basic functionalities of the website and to enhance your academic experience. 
                            You can choose for each category to opt-in/out whenever you want. 
                            For more details relevant to cookies and other sensitive data, 
                            please read the full <a href="#" class="cc-link">privacy policy</a>.`
                        }, {
                            title: '<a href="https://gdpr.eu/cookies/" target="_blank">Strictly necessary cookies</a>',
                            description: 'These cookies are essential for the proper functioning of the website. Without these cookies, the website would not work properly',
                            toggle: {
                                value: 'necessary',
                                enabled: true,
                                readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                            }
                        }, {
                            title: 'Statistics cookies',
                            description: `These cookies collect information about your usage on the website (the pages you visited and your interactions with the page).
                            All of the data is pseudonymised and cannot directly be used to identify you.`,
                            toggle: {
                                value: 'analytics',     // your cookie category
                                enabled: false,
                                readonly: false
                            },
                            cookie_table: [             // list of all expected cookies
                                {
                                    col1: '^_ga',       // match all cookies starting with "_ga"
                                    col2: 'google.com',
                                    col3: '2 years',
                                    col4: 'description ...',
                                    is_regex: true
                                },
                                {
                                    col1: '_gid',
                                    col2: 'google.com',
                                    col3: '1 day',
                                    col4: 'description ...',
                                }
                            ]
                        }, {
                            title: 'More information',
                            description: 'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="#yourcontactpage">contact us</a>.',
                        }
                    ]
                }
            }
        }
    });
});