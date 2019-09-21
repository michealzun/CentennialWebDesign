<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ClubDetails.aspx.cs" Inherits="ClubDetails" MasterPageFile="~/MasterPage.master" %>

<asp:Content ContentPlaceHolderID="head" runat="server">
    <title>Club Details</title>
</asp:Content>

<asp:Content ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <h2>Club Details</h2>
    <asp:DataList ID="DataList" runat="server" CssClass="text" OnItemCommand="ClubItemCommand">
        <ItemTemplate>
            CRegNumber:
            <asp:Label ID="CRegNumberLabel" runat="server" Text='<%# Eval("CRegNumber") %>' />
            <br />
            CName:
            <asp:Label ID="CNameLabel" runat="server" Text='<%# Eval("CName") %>' />
            <br />
            CCity:
            <asp:Label ID="CCityLabel" runat="server" Text='<%# Eval("CCity") %>' />
            <br />
            CAddress:
            <asp:Label ID="CAddressLabel" runat="server" Text='<%# Eval("CAddress") %>' />
            <br />
            <asp:LinkButton ID="LinkButton" runat="server" Text="Delete This Club" CommandName="Delete" CommandArgument='<%# Eval("CName") %>' />
        </ItemTemplate>
    </asp:DataList>
    <hr />

    <h2>Players</h2>
    <asp:LoginStatus runat="server"></asp:LoginStatus><br />
    <a href="Register.aspx">Register</a>
    <hr />
    <asp:LoginView runat="server">
        <AnonymousTemplate>
            <p>
                Login for more options. ps: username: Admin, Password: Admin!@#
            </p>
            <asp:GridView ID="PlayerView2" CssClass="text"  runat="server" AutoGenerateRows="False" DataKeyNames="PRegNumber" DataSourceID="SqlDataSource1" AutoGenerateColumns="False">
                <Columns>
                    <asp:BoundField DataField="PRegNumber" HeaderText="PRegNumber" InsertVisible="False" ReadOnly="True" SortExpression="PRegNumber" />
                    <asp:BoundField DataField="PName" HeaderText="PName" SortExpression="PName" />
                    <asp:BoundField DataField="PBirthday" HeaderText="PBirthday" SortExpression="PBirthday" />
                    <asp:BoundField DataField="PJersey" HeaderText="PJersey" SortExpression="PJersey" />
                    <asp:BoundField DataField="Club_FK" HeaderText="Club_FK" SortExpression="Club_FK" />
                </Columns>
            </asp:GridView>
        </AnonymousTemplate>
        <LoggedInTemplate>
          <asp:GridView  ID="playerView" runat="server" DataSourceID="SqlDataSource1" AutoGenerateColumns="False" DataKeyNames="PRegNumber" CssClass="text" AutoGenerateRows="False" AutoGenerateEditButton="True" >
                <Columns>
                    <asp:TemplateField HeaderText="PRegNumber" InsertVisible="False" SortExpression="PRegNumber">
                        <EditItemTemplate>
                            <asp:TextBox ID="TextBox1" runat="server" Text='<%# Bind("PRegNumber") %>'></asp:TextBox>
                        </EditItemTemplate>
                        <ItemTemplate>
                            <asp:Label ID="Label5" runat="server" Text='<%# Bind("PRegNumber") %>'></asp:Label>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="PName" SortExpression="PName">
                        <EditItemTemplate>
                            <asp:TextBox ID="PRegName" runat="server" Text='<%# Bind("PName") %>'></asp:TextBox>
                        </EditItemTemplate>
                        <InsertItemTemplate>
                            <asp:TextBox ID="TextBox1" runat="server" Text='<%# Bind("PName") %>'></asp:TextBox>
                        </InsertItemTemplate>
                        <ItemTemplate>
                            <asp:Label ID="Label1" runat="server" Text='<%# Bind("PName") %>'></asp:Label>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="PBirthday" SortExpression="PBirthday">
                        <EditItemTemplate>
                            <asp:TextBox ID="TextBox4" runat="server" Text='<%# Bind("PBirthday") %>'></asp:TextBox>
                        </EditItemTemplate>
                        <InsertItemTemplate>
                            <asp:TextBox ID="TextBox4" runat="server" Text='<%# Bind("PBirthday") %>'></asp:TextBox>
                        </InsertItemTemplate>
                        <ItemTemplate>
                            <asp:Label ID="Label4" runat="server" Text='<%# Bind("PBirthday") %>'></asp:Label>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="PJersey" SortExpression="PJersey">
                        <EditItemTemplate>
                            <asp:TextBox ID="TextBox2" runat="server" Text='<%# Bind("PJersey") %>'></asp:TextBox>
                        </EditItemTemplate>
                        <InsertItemTemplate>
                            <asp:TextBox ID="TextBox2" runat="server" Text='<%# Bind("PJersey") %>'></asp:TextBox>
                        </InsertItemTemplate>
                        <ItemTemplate>
                            <asp:Label ID="Label2" runat="server" Text='<%# Bind("PJersey") %>'></asp:Label>
                        </ItemTemplate>
                    </asp:TemplateField>
                    <asp:TemplateField HeaderText="Club_FK" SortExpression="Club_FK">
                        <EditItemTemplate>
                            <asp:TextBox ID="TextBox3" runat="server" Text='<%# Bind("Club_FK") %>'></asp:TextBox>
                        </EditItemTemplate>
                        <InsertItemTemplate>
                            <asp:TextBox ID="TextBox3" runat="server" Text='<%# Bind("Club_FK") %>'></asp:TextBox>
                        </InsertItemTemplate>
                        <ItemTemplate>
                            <asp:Label ID="Label3" runat="server" Text='<%# Bind("Club_FK") %>'></asp:Label>
                        </ItemTemplate>
                    </asp:TemplateField>
                </Columns>
            </asp:GridView>

        </LoggedInTemplate>
    </asp:LoginView>

    <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:Potato %>" 
        SelectCommand="SELECT * FROM [Player]" 
        UpdateCommand="UPDATE [Player] SET [PName]=@PName,[PBirthday]=@PBirthday,[PJersey]=@PJersey,[Club_FK]=@Club_FK WHERE [PRegNumber] = @PRegNumber"></asp:SqlDataSource>
</asp:Content>
