// exchange.ts
// import * as EURASIA_GEO_JSON from 'eurasia.geo.json';

const EXCHANGE = {
    PARTICIPATION: [{'name':'No','value':46},{'name':'Yes (SE 2021)','value':8}],
    NO_REASON: [{'name': "Not interested in exchange", 'value': 25},{'name': "Did not know that was an option", 'value': 8},{'name': "Lack of course flexibility", 'value': 18},{'name': "Money/Costs of exchange", 'value': 3},{'name': "Application logistics", 'value': 4},{'name': "Cancelled/unable", 'value': 2},{'name': "Location uncertainty/mismatch", 'value': 2},{'name': "Worried about graduating on time", 'value': 8}],
    YES: {
        'South Korea': {
            schools: [{
                'uni_name': 'Pohang University of Science & Technology',
                'uni_abbrev': 'POSTECH',
                'count': 1,
            }],
            totalCount: 1,
        },
        'Singapore': {
            schools: [{
                'uni_name': 'National University of Singapore',
                'uni_abbrev': 'NUS',
                'count': 1,
            }, {
                'uni_name': 'Nanyang Technological University',
                'uni_abbrev': 'NTU',
                'count': 1,
            }],
            totalCount: 2,
        },
        'Switzerland': {
            schools: [{
                'uni_name': 'École polytechnique fédérale de Lausanne',
                'uni_abbrev': 'EPFL',
                'count': 3
            }],
            totalCount: 3,
        },
        'United Kingdom': {
            schools: [{
                'uni_name': 'University College London',
                'uni_abbrev': 'UCL',
                'count': 1
            }],
            totalCount: 1,
        },
        'Netherlands': {
            schools: [{
                'uni_name': 'Delft University of Technology',
                'uni_abbrev': 'TU Delft',
                'count': 1
            }],
            totalCount: 1,
        },
    },
};


export {
    EXCHANGE,
}
