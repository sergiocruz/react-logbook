export function getStyles(opts) {
  const {
    sideBarColor = '#ed1c40',
    entryTextColor = '#696969',
    buttonBgColor = '#311B92',
    buttonTextColor = 'white',
    detailsBgColor = '#F5F5F5',
  } = opts;

  return {
    ul: {
      borderLeft: `3px solid ${sideBarColor}`,
      fontSize: '.7em',
      margin: '0',
      padding: '1em 0 1em 1em',
      textAlign: 'left',
    },
    year: {
      fontSize: '1.8em',
      fontWeight: '100',
    },
    entriesList: {
      margin: 0,
      padding: 0,
    },
    li: {
      color: entryTextColor,
      lineHeight: '1.7em',
      listStyle: 'none',
      spaced: {
        marginTop: '2em',
      },
    },
    a: {
      color: entryTextColor,
      textDecoration: 'none',
    },
    entryDetails: {
      backgroundColor: detailsBgColor,
      margin: '0',
      overflow: 'hidden',
      maxHeight: '0',
      padding: '0 2em',
      visibility: 'hidden',
      transition: 'all 0.5s ease',
      isShowing: {
        margin: '.5em 0 2em',
        maxHeight: '20em',
        padding: '.5em 2em',
        visibility: 'visible',
      },
    },
    btn: {
      backgroundColor: buttonBgColor,
      border: 'none',
      borderRadius: '.25em',
      color: buttonTextColor,
      fontSize: '1em',
      fontWeight: '200',
      marginBottom: '0',
      marginLeft: '0',
      marginRight: '0',
      marginTop: '0',
      padding: '.5em 1em',
      textDecoration: 'none',
      spaced: {
        marginLeft: '.7em',
      },
    },
  };
}
