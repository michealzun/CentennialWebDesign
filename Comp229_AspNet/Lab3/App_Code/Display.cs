using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

//yueyang sun,300933625, a useless class that was used for lab2 back then
public class Display
{
    public Display()
    {
    }

    public List<Club> DisplayClubs()
    {
        return (List<Club>)HttpContext.Current.Application["Clubs"];
    }
}