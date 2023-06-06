import { Field } from 'payload/types'
import Alert from '../Alert'
import Copy from '../Copy'
import Quote from '../Quote'

const styleTabFields: Function = (): Field[] => [
  {
    type: 'row',
    fields: [
      {
        name: 'blockWIdth',
        type: 'select',
        label: 'Block Width',
        options: [
          {
            label: 'Full Width',
            value: 'full'
          },
          {
            label: 'Container',
            value: 'container'
          }
        ]
      },
      {
        name: 'blockPadding',
        type: 'select',
        label: 'Block Padding',
        options: [
          {
            label: 'Padding',
            value: 'section-padding'
          },
          {
            label: 'Padding Top',
            value: 'section-padding-top'
          },
          {
            label: 'Padding Bottom',
            value: 'section-padding-bottom'
          },
          {
            label: 'No Padding',
            value: 'section-no-padding'
          }
        ]
      },
      {
        name: 'numberOfColumns',
        type: 'select',
        label: 'Number of Columns',
        options: [
          {
            label: '1 Column',
            value: 'one-col'
          },
          {
            label: '2 Columns',
            value: 'two-col'
          },
          {
            label: '3 Columns',
            value: 'three-col'
          }
        ]
      }
    ]
  },
  {
    type: 'row',
    fields: [
      {
        name: 'desktopContainerWidth',
        type: 'select',
        label: 'Desktop Container Width',
        options: [
          {
            label: 'Full Width',
            value: 'col-span-12'
          },
          {
            label: '85% (10 column)',
            value: 'col-span-10'
          },
          {
            label: '2/3 (8 column)',
            value: 'col-span-8'
          },
          {
            label: 'Half (6 column)',
            value: 'col-span-6'
          }
        ]
      },
      {
        name: 'desktopContainerAlignment',
        type: 'select',
        label: 'Desktop Container Alignment',
        options: [
          {
            label: 'Left',
            value: 'left'
          },
          {
            label: 'Center',
            value: 'center'
          },
          {
            label: 'Right',
            value: 'right'
          }
        ],
        admin: {
          condition: (data, siblingData, { user }) => {
            if (
              siblingData.desktopContainerWidth !== null &&
              siblingData.desktopContainerWidth !== 'col-span-12'
            ) {
              return true
            } else {
              return false
            }
          }
        }
      },
      {
        name: 'desktopContentAlignment',
        type: 'select',
        label: 'Content Alignment',
        options: [
          {
            label: 'Top',
            value: 'top'
          },
          {
            label: 'Center',
            value: 'center'
          }
        ]
      }
    ]
  },
  {
    type: 'group',
    label: 'Column 1',
    name: 'columnOne',
    fields: [
      {
        name: 'layout',
        type: 'blocks',
        blocks: [Quote, Copy, Alert]
      }
    ],
    admin: {
      condition: (data, siblingData, { user }) => {
        console.log(siblingData)
        if (
          siblingData.numberOfColumns !== null &&
          (siblingData.numberOfColumns === 'one-col' ||
            siblingData.numberOfColumns === 'two-col' ||
            siblingData.numberOfColumns === 'three-col')
        ) {
          return true
        } else {
          return false
        }
      }
    }
  },
  {
    type: 'group',
    label: 'Column 2',
    name: 'columnTwo',
    fields: [
      {
        name: 'layout',
        type: 'blocks',
        blocks: [Quote, Copy, Alert]
      }
    ],
    admin: {
      condition: (data, siblingData, { user }) => {
        console.log(siblingData)
        if (
          siblingData.numberOfColumns !== null &&
          (siblingData.numberOfColumns === 'two-col' || siblingData.numberOfColumns === 'three-col')
        ) {
          return true
        } else {
          return false
        }
      }
    }
  },
  {
    type: 'group',
    label: 'Column 3',
    name: 'columnThree',
    fields: [
      {
        name: 'layout',
        type: 'blocks',
        blocks: [Quote, Copy, Alert]
      }
    ],
    admin: {
      condition: (data, siblingData, { user }) => {
        console.log(siblingData)
        if (siblingData.numberOfColumns !== null && siblingData.numberOfColumns === 'three-col') {
          return true
        } else {
          return false
        }
      }
    }
  }
]

export default styleTabFields()
