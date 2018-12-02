/**
 * Created by ApolloYr on 5/10/2018.
 */
import { Component } from '@angular/core';
import { SettingsService } from '../../../services/setting.service';

@Component({
  selector: 'page-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  clientMenuItems = [
    {
      name: 'Ideal Wealth',
      routerName: null,
      subMenus: [
        {
          name: 'About US',
          routerName: 'app/wealth/about-us'
        },
        {
          name: 'Infrastructure',
          routerName: 'app/wealth/infrastructure'
        }
      ]
    },
    {
      name: 'Ideal Finance',
      routerName: null,
      subMenus: [
        {
          name: 'About US',
          routerName: 'app/finance/about-us'
        },
        {
          name: 'Management',
          routerName: 'app/finance/management'
        },
        {
          name: 'Services',
          routerName: 'app/finance/services'
        },
        {
          name: 'M & A',
          routerName: 'app/finance/m-a',
          subMenus: [
            {
              name: 'Our Expertise',
              routerName: null
            },
            {
              name: 'Our Portfolio',
              routerName: null
            }
          ]
        },
        {
          name: 'Loan Facilities',
          routerName: 'app/finance/loan-facilities',
          subMenus: [
            {
              name: 'Working Capital',
              routerName: null
            },
            {
              name: 'Trade Finance',
              routerName: 'finance-home'
            },
            {
              name: 'Structured Trade Finance',
              routerName: null
            },
            {
              name: 'Ship Finance',
              routerName: null
            }
          ]
        },
        {
          name: 'Tax Incentives',
          routerName: 'app/finance/tax-incentives',
          subMenus: [
            {
              name: 'Asia',
              routerName: null
            },
            {
              name: 'Singapore',
              routerName: null
            }
          ]
        }
      ]
    },
    {
      name: 'Ideal Fiduciary',
      routerName: null,
      subMenus: [
        {
          name: 'About US',
          routerName: 'app/fiduciary/about-us'
        },
        {
          name: 'Management',
          routerName: 'app/fiduciary/management'
        },
        {
          name: 'Price List',
          routerName: 'app/fiduciary/price-list'
        },
        {
          name: 'Comparison',
          routerName: 'app/fiduciary/comparison'
        },
        {
          name: 'Forms',
          routerName: 'app/fiduciary/forms'
        },
        {
          name: 'E-Fiduciary',
          routerName: 'app/fiduciary/e-fiduciary'
        },
        {
          name: 'E-Billing',
          routerName: 'app/fiduciary/e-billing'
        }
      ]
    },
    {
      name: 'Ideal Capital',
      routerName: null,
      subMenus: [
        {
          name: 'Fund Services',
          routerName: 'app/capital/fund-services'
        },
        {
          name: 'Licensing',
          routerName: 'app/capital/licensing'
        },
        {
          name: 'EAM Relations',
          routerName: 'app/capital/eam-relations'
        }
      ]
    },
    {
      name: 'Investors',
      routerName: null,
      subMenus: [
        {
          name: 'Ideal Wealth',
          routerName: 'app/investors/wealth'
        },
        {
          name: 'Ideal Finance',
          routerName: 'app/investors/finance'
        },
        {
          name: 'Ideal Capital',
          routerName: 'app/investors/capital'
        }
      ]
    },
    {
      name: 'Client Services',
      routerName: null,
      subMenus: [
        {
          name: 'Download',
          routerName: 'app/file-management/home'
        },
        {
          name: 'Order Online',
          routerName: 'client/order/create'
        },
        {
          name: 'Portfolio',
          routerName: 'client/portfolio'
        },
        {
          name: 'Messages',
          routerName: null
        },
        {
          name: 'Secure Messaging',
          routerName: 'app/messages/inbox'
        },
        {
          name: 'Forum',
          routerName: null
        },
        {
          name: 'News',
          routerName: null
        }
      ]
    },
    {
      name: 'Misc',
      routerName: null,
      subMenus: [
        {
          name: 'Privacy Policy',
          routerName: null
        },
        {
          name: 'Terms & Conditions',
          routerName: null
        }
      ]
    }
  ];
  operatorMenuItems = [
    {
      name: 'Ideal Wealth',
      routerName: null,
      subMenus: [
        {
          name: 'About US',
          routerName: 'app/wealth/about-us'
        },
        {
          name: 'Infrastructure',
          routerName: 'app/wealth/infrastructure'
        }
      ]
    },
    {
      name: 'Ideal Finance',
      routerName: null,
      subMenus: [
        {
          name: 'About US',
          routerName: 'app/finance/about-us'
        },
        {
          name: 'Management',
          routerName: 'app/finance/management'
        },
        {
          name: 'Services',
          routerName: 'app/finance/services'
        },
        {
          name: 'M & A',
          routerName: 'app/finance/m-a',
          subMenus: [
            {
              name: 'Our Expertise',
              routerName: null
            },
            {
              name: 'Our Portfolio',
              routerName: null
            }
          ]
        },
        {
          name: 'Loan Facilities',
          routerName: 'app/finance/loan-facilities',
          subMenus: [
            {
              name: 'Working Capital',
              routerName: null
            },
            {
              name: 'Trade Finance',
              routerName: 'finance-home'
            },
            {
              name: 'Structured Trade Finance',
              routerName: null
            },
            {
              name: 'Ship Finance',
              routerName: null
            }
          ]
        },
        {
          name: 'Tax Incentives',
          routerName: 'app/finance/tax-incentives',
          subMenus: [
            {
              name: 'Asia',
              routerName: null
            },
            {
              name: 'Singapore',
              routerName: null
            }
          ]
        }
      ]
    },
    {
      name: 'Ideal Fiduciary',
      routerName: null,
      subMenus: [
        {
          name: 'About US',
          routerName: 'app/fiduciary/about-us'
        },
        {
          name: 'Management',
          routerName: 'app/fiduciary/management'
        },
        {
          name: 'Price List',
          routerName: 'app/fiduciary/price-list'
        },
        {
          name: 'Comparison',
          routerName: 'app/fiduciary/comparison'
        },
        {
          name: 'Forms',
          routerName: 'app/fiduciary/forms'
        },
        {
          name: 'E-Fiduciary',
          routerName: 'app/fiduciary/e-fiduciary'
        },
        {
          name: 'E-Billing',
          routerName: 'app/fiduciary/e-billing'
        }
      ]
    },
    {
      name: 'Ideal Capital',
      routerName: null,
      subMenus: [
        {
          name: 'Fund Services',
          routerName: 'app/capital/fund-services'
        },
        {
          name: 'Licensing',
          routerName: 'app/capital/licensing'
        },
        {
          name: 'EAM Relations',
          routerName: 'app/capital/eam-relations'
        }
      ]
    },
    {
      name: 'Investors',
      routerName: null,
      subMenus: [
        {
          name: 'Ideal Wealth',
          routerName: 'app/investors/wealth'
        },
        {
          name: 'Ideal Finance',
          routerName: 'app/investors/finance'
        },
        {
          name: 'Ideal Capital',
          routerName: 'app/investors/capital'
        }
      ]
    },
    {
      name: 'Employees',
      routerName: null,
      subMenus: [
        {
          name: 'Dashboard',
          routerName: 'operator/dashboard'
        },
        {
          name: 'Rules & Regulations',
          routerName: null
        },
        {
          name: 'Portrack',
          routerName: null
        },
        {
          name: 'Client Orders',
          routerName: null
        },
        {
          name: 'My Prospects',
          routerName: 'operator/prospect'
        },
        {
          name: 'My Tasks',
          routerName: null
        },
        {
          name: 'My Calendar',
          routerName: 'operator/calendar'
        },
        {
          name: 'My Files',
          routerName: 'app/file-management/home'
        },
        {
          name: 'My Emails',
          routerName: null
        },
        {
          name: 'My Contacts',
          routerName: 'app/contact/list'
        },
        {
          name: 'Secure Messaging',
          routerName: 'app/messages/inbox'
        },
        {
          name: 'IT Support',
          routerName: null
        }
      ]
    },
    {
      name: 'Misc',
      routerName: null,
      subMenus: [
        {
          name: 'Privacy Policy',
          routerName: null
        },
        {
          name: 'Terms & Conditions',
          routerName: null
        }
      ]
    }
  ];

  constructor(public setting: SettingsService) {}
}
