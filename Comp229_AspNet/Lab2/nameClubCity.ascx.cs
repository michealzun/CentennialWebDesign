using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class nameClubCity : System.Web.UI.UserControl
{
    public string Field { set { LabelA.CssClass = "text"; LabelB.CssClass = "text"; } }
    public string TextA { get { return TextBoxA.Text; } set { TextBoxA.Text = value; } }
    public string TextB { get { return TextBoxB.Text; } set { TextBoxB.Text = value; } }
}