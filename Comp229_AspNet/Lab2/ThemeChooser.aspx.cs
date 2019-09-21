using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class ThemeChooser : System.Web.UI.Page
{
    protected void Page_PreInit(object sender, EventArgs e)
    {
        HttpCookie theme = Request.Cookies["theme"];
        if (theme == null) // default to dark theme
        {
            Page.Theme = "Dark";
        }
        else { Page.Theme = theme.Value; } //change theme based on what's in the cookie
    }
    protected void SetTheme(object sender, EventArgs e)
    {
        HttpCookie theme = new HttpCookie("theme");
        theme.Value = radioButton.SelectedValue;
        theme.Expires = DateTime.Now.AddDays(10);
        Response.Cookies.Add(theme); //save the new theme setting as a cookie
        Response.Redirect(HttpContext.Current.Request.Url.ToString()); //refresh page
    }
}