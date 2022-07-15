# Assignment #3

-   Fake store API (with useEffet/fetch pattern)... you can change Fake store API for something else if you want
-   React router
    -   List all products
    -   Single product (can go back to all products page)
-   Gut useEffect/fetch pattern and replace it with React-Query/fetch pattern (caching!!!!)

Bonus: local shopping cart
Bonus: use useContext somewhere in your app

# Notes

-   Just because you can use useContext and "teleport" props anywhere, does not mean you should. It adds more boilerplate and often using the composition patterns (ie: props.children) is much more clear. Also, all components that
    use that context will re-render even if nothing changed for them.

-   TLDR: don't use useContext by default

-   A good use case for useContext is with Material UI. We can "teleport" our prop into the "renderCell" component.

const columns: GridColDef[] = [
{
field: 'date',
headerName: 'Year',
renderCell: (params: GridRenderCellParams<Date>) => {

        const myCssInfluencingThing = useContext(myCssContext)

     return <strong>
        {params.value.getFullYear()}
        <Button
          variant="contained"
          size="small"
          style={{ marginLeft: 16 }}
          tabIndex={params.hasFocus ? 0 : -1}
          sx={{backColor: myCssInfluencingThing.backColor}}
        >
          Open
        </Button>
      </strong>
    }

},
];
