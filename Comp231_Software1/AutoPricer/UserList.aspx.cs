using System;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Data;
using System.Configuration;
public partial class UserList : System.Web.UI.Page
{
    private DataSet dataSet;

    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            BindGrid();
        }
    }
    private void BindGrid(string cmd = "SELECT Username FROM User")
    {
        // Define data objects
        SqlConnection conn;
        dataSet = new DataSet();
        SqlDataAdapter adapter;
        // Read the DataSet from the ViewState if available
        if (ViewState["UsersDataSet"] == null)
        {
            // Read the connection string from Web.config
            string connectionString =
                ConfigurationManager.ConnectionStrings[
                "database"].ConnectionString;
            // Initialize connection
            conn = new SqlConnection(connectionString);
            // Create adapter
            adapter = new SqlDataAdapter(
                cmd,
                conn);
            // Fill the DataSet
            adapter.Fill(dataSet, "Users");
            // Store the DataSet in view state
            ViewState["UsersDataSet"] = dataSet;
        }
        else
        {
            dataSet = (DataSet)ViewState["UsersDataSet"];
        }
        // Prepare the sort expression using the gridSortDirection and
        // gridSortExpression properties
        string sortExpression;
        if (gridSortDirection == SortDirection.Ascending)
        {
            sortExpression = gridSortExpression + " ASC";
        }
        else
        {
            sortExpression = gridSortExpression + " DESC";
        }
        // Sort the data
        dataSet.Tables["Users"].DefaultView.Sort = sortExpression;
        // Bind the grid to the DataSet
        usersGrid.DataSource = dataSet.Tables["Users"].DefaultView;
        usersGrid.DataBind();
    }

    protected void usersGrid_PageIndexChanging(object sender, GridViewPageEventArgs e)
    {
        // Retrieve the new page index
        int newPageIndex = e.NewPageIndex;
        // Set the new page index of the GridView
        usersGrid.PageIndex = newPageIndex;
        // Bind the grid to its data source again to update its
        // contents
        BindGrid();
    }
    protected void usersGrid_Sorting(object sender, GridViewSortEventArgs e)
    {
        // Retrieve the name of the clicked column (sort expression)
        string sortExpression = e.SortExpression;
        // Decide and save the new sort direction
        if (sortExpression == gridSortExpression)
        {
            if (gridSortDirection == SortDirection.Ascending)
            {
                gridSortDirection = SortDirection.Descending;
            }
            else
            {
                gridSortDirection = SortDirection.Ascending;
            }
        }
        else
        {
            gridSortDirection = SortDirection.Ascending;
        }
        // Save the new sort expression
        gridSortExpression = sortExpression;
        // Rebind the grid to its data source
        BindGrid();
    }

    private SortDirection gridSortDirection
    {
        get
        {
            // Initial state is Ascending
            if (ViewState["GridSortDirection"] == null)
            {
                ViewState["GridSortDirection"] = SortDirection.Ascending;
            }
            // Return the state
            return (SortDirection)ViewState["GridSortDirection"];
        }
        set
        {
            ViewState["GridSortDirection"] = value;
        }
    }

    private string gridSortExpression
    {
        get
        {
            // Initial sort expression is DepartmentID
            if (ViewState["GridSortExpression"] == null)
            {
                ViewState["GridSortExpression"] = "Username";
            }
            // Return the sort expression
            return (string)ViewState["GridSortExpression"];
        }
        set
        {
            ViewState["GridSortExpression"] = value;
        }
    }

    protected void Username_Click(object sender, EventArgs e)
    {
        //Get the clicked row
        GridViewRow clickedRow = ((LinkButton)sender).NamingContainer as GridViewRow;

        string username = usersGrid.Rows[clickedRow.RowIndex].Cells[0].Text;

        Response.Redirect("UserDetails.aspx?user=" + username);
    }

    protected void usersGrid_SelectedIndexChanged(object sender, EventArgs e)
    {
        // Obtain the index of the selected row

    }

}