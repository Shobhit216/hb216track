export const COLUMNS = () => [
    {
      Header: '',
      accessor: 'select',
      Cell: ({ row }) => (
        <input
          type="checkbox"
          checked={row.original.isSelected}
          onChange={() => row.original.handleRowSelect(row.index)}
        />
      ),
    },
    {
      Header: 'SN',
      accessor: 'id',
    },
    {
      Header: 'Menu Name',
      accessor: '',
    },
    {
        Header: 'Display',
        accessor: '',
      },
      {
        Header: 'Priority',
        accessor: '',
      },
      {
        Header: 'Where to Show',
        accessor: '',
      },
      
  ];
  