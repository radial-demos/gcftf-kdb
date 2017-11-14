'use strict';

module.exports = [
  {
    id: 'index',
    uriSegment: 'Home',
    label: 'Home',
    layout: 'default',
    model: 'content',
  },
  {
    id: 'about',
    uriSegment: 'About',
    label: 'About',
    layout: 'default',
    model: 'content',
  },
  {
    id: 'nationpage',
    uriSegment: 'NationPage',
    label: 'Nation Page',
    layout: 'national',
    model: 'data',
  },
  {
    id: 'stateoverview',
    uriSegment: 'StateOverview',
    label: 'Overview',
    layout: 'jurisdictional',
    model: 'data',
  },
  {
    id: 'carbonaccounting',
    uriSegment: 'CarbonAccounting',
    label: 'Carbon Accounting',
    layout: 'jurisdictional',
    model: 'data',
  },
  {
    id: 'frameworks',
    uriSegment: 'Frameworks',
    label: 'Legal, Policy & Institutional Frameworks',
    layout: 'jurisdictional',
    model: 'data',
  },
  {
    id: 'partnerships',
    uriSegment: 'Partnerships',
    label: 'Partnerships and Ongoing Initiatives',
    layout: 'jurisdictional',
    model: 'data',
  },
];
