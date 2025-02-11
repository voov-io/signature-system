    // 1. Plantillas de cada departamento con los mismos placeholders
    //    (NAME, EMAIL, PHONE, POSITION, etc. según necesites).

const templates = {
    skillcloud: `
          <table cellpadding="0" width="600" style="border-collapse: collapse; font-size: 14px;">
              <tr>
                  <td style="margin: 0.1px; padding: 0;">
                      <table cellpadding="0" style="border-collapse: collapse;">
                          <tr>
                              <td valign="top" style="margin: 0.1px; padding: 0 10px 0 0;"><img src="{{IMAGE}}" width="150" valign="top" alt="photo-logo" /></td>
                              <td valign="top" style="margin: 0.1px; padding: 0 0 0 10px; border-left: 3px solid #19355f;">
                                  <table cellpadding="0" style="border-collapse: collapse;">
                                      <tr>
                                          <td style="margin: 0.1px; padding: 0; font: 18.1px/22.9px Verdana;"><span style="color: #2cabe2; font: bold 18px Verdana;">{{NAME}}</span>&nbsp;</td>
                                      </tr>
                                      <tr>
                                          <td style="margin: 0.1px; padding: 0; font: 12.1px/15.3px Verdana;"><span style="color: #19355f; font: italic bold 12px Verdana;">{{POSITION}}</span>&nbsp;</td>
                                      </tr>
                                      <tr>
                                          <td style="margin: 0.1px; padding: 10px 0 0; font: 13.1px/16.5px Verdana;">
                                              <span style="color: #2cabe2; font: bold 13px Verdana;">E-mail:</span>&nbsp;
                                              <a style="text-decoration: none; color: #19355f; font: 13px Verdana;" target="_blank">{{EMAIL}}</a>&nbsp;
                                          </td>
                                      </tr>
                                      <tr>
                                          <td style="margin: 0.1px; padding: 0; font: 13.1px/16.5px Verdana;">
                                              <span style="color: #2cabe2; font: bold 13px Verdana;">Website:</span>&nbsp;
                                              <a href="https://skillcloudstaffing.com/" style="text-decoration: none; color: #19355f; font: 13px Verdana;" target="_blank">skillcloudstaffing.com</a>&nbsp;
                                          </td>
                                      </tr>
                                      <tr>
                                          <td style="margin: 0.1px; padding: 10px 0 0; color: #2cabe2; font: bold 13px/16.5px Verdana;">Follow us:</td>
                                      </tr>
                                      <tr>
                                          <td style="margin: 0.1px; padding: 5px 0 0;">
                                              <table cellpadding="0" style="border-collapse: collapse;">
                                                  <tr>
                                                      <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                          <a href="https://www.facebook.com/VOOVYourTopVirtualAssistantPartner" target="_blank" valign="top">
                                                              <img src="./resources/facebook-sk.png" width="24" style="display: block; outline: 0;" valign="top" alt="facebook" />
                                                          </a>
                                                      </td>
                                                      <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                          <a href="https://www.instagram.com/voov_north_america/" target="_blank" valign="top">
                                                              <img src="./resources/instagram-sk.png" width="24" style="display: block; outline: 0;" valign="top" alt="instagram" />
                                                          </a>
                                                      </td>
                                                      <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                          <a href="https://www.linkedin.com/company/98386716" target="_blank" valign="top">
                                                              <img src="./resources/linkedin-sk.png" width="24" style="display: block; outline: 0;" valign="top" alt="linkedin" />
                                                          </a>
                                                      </td>
                                                  </tr>
                                              </table>
                                          </td>
                                      </tr>
                                  </table>
                              </td>
                          </tr>
                      </table>
                  </td>
              </tr>
              <tr>
                  <td style="margin: 0.1px; padding: 10px 0 0; line-height: 1px; font-size: 1px;">
                      <a href="https://skillcloudstaffing.com" target="_blank"><img src="./resources/banner-skillcloud.gift" width="438" style="outline: 0;" alt="banner" /></a>
                  </td>
              </tr>
              <tr>
                  <td style="margin: 0.1px; padding: 10px 0 0 0; font: 8px/10.2px Verdana; color: #19355f;">
                      <div>
                          <span style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">
                              IMPORTANT: This message is confidential. It may also be privileged or otherwise protected by work product immunity or other legal rules. If you have received it by mistake, please let us know by e-mail reply and delete
                              it from your system; you may not copy this message or disclose its contents to anyone.
                          </span>
                      </div>
                  </td>
              </tr>
          </table>

    `,
    management: `
      <!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1" />
    </head>
    <body>
        <table cellpadding="0" width="600" style="border-collapse: collapse; font-size: 14px;">
            <tr>
                <td style="margin: 0.1px; padding: 0;">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <td valign="top" style="margin: 0.1px; padding: 0 15px 0 0;"><img src="{{IMAGE}}" width="130" style="display: block;" alt="photo-logo" /></td>
                            <td style="margin: 0.1px; padding: 0;">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td style="margin: 0.1px; padding: 0; font: 15.1px/19.1px Verdana;"><span style="color: #000000; font: bold 15px Verdana;">{{NAME}}</span>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 2px 0 0; font: 10.1px/12.7px Verdana;"><span style="color: #212b5c; font: italic 10px Verdana;">{{POSITION}}</span>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 2px 0 0;">
                                            <table cellpadding="0" style="border-collapse: collapse;">
                                                <tr>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;"><img src="./resources/email.png" alt="" style="display: block;" width="14" /></td>
                                                    <td style="margin: 0.1px; padding: 0; font: 9.1px/11.4px Verdana;">
                                                        <a style="text-decoration: none; color: #000000; font: 9px Verdana;" target="_blank">{{EMAIL}}</a>&nbsp;
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 2px 0 0;">
                                            <table cellpadding="0" style="border-collapse: collapse;">
                                                <tr>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;"><img src="./resources/website.png" alt="" style="display: block;" width="14" /></td>
                                                    <td style="margin: 0.1px; padding: 0; font: 9.1px/11.4px Verdana;">
                                                        <a href="https://voov.io/" style="text-decoration: none; color: #000000; font: 9px Verdana;" target="_blank">www.voov.io</a>&nbsp;
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td height="10" style="margin: 0.1px; padding: 0; font-size: 0.1px; line-height: 0.1px; border-bottom: 3px solid #212b5c;"></td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 10px 0 0; font-family: Verdana; color: #000000; font-size: 11px; font-weight: bold;">Follow our Social Media</td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 5px 0 0;">
                                            <table cellpadding="0" style="border-collapse: collapse;">
                                                <tr>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                        <a href="https://www.facebook.com/VOOVYourTopVirtualAssistantPartner" target="_blank"><img src="./resources/facebook-voov.png" width="20" valign="top" alt="facebook" /></a>
                                                    </td>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                        <a href="https://www.instagram.com/voov_north_america/" target="_blank">
                                                            <img src="./resources/instagram-voov.png" width="20" valign="top" alt="instagram" />
                                                        </a>
                                                    </td>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                        <a href="https://www.youtube.com/@VOOV_Group/videos" target="_blank"><img src="./resources/youtube-voov.png" width="20" valign="top" alt="youtube" /></a>
                                                    </td>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                        <a href="https://www.linkedin.com/company/98386716" target="_blank">
                                                            <img src="./resources/linkeding-voov.png" width="20" valign="top" alt="linkedin" />
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td style="margin: 0.1px; padding: 10px 0 0; line-height: 1px; font-size: 1px;">
                    <a href="https://voov.io/" target="_blank"><img src="./resources/banner-voov.gift" width="350" style="outline: 0;" alt="banner" /></a>
                </td>
            </tr>
            <tr>
                <td style="margin: 0.1px; padding: 10px 0 0 0; font: 8px/10.2px Arial; color: #000000;">
                    <div>
                        IMPORTANT: This message is confidential. It may also be privileged or otherwise protected by work product immunity or other legal rules. If you have received it by mistake, please let us know by e-mail reply and
                        delete it from your system; you may not copy this message or disclose its contents to anyone.
                    </div>
                </td>
            </tr>
        </table>
    </body>
</html>

    `,
    executive: `
      <!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1" />
    </head>
    <body>
        <table cellpadding="0" width="600" style="border-collapse: collapse; font-size: 14px;">
            <tr>
                <td style="margin: 0.1px; padding: 0;">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <td valign="top" style="margin: 0.1px; padding: 0 15px 0 0;"><img src="{{IMAGE}}" width="130" style="display: block;" alt="photo-logo" /></td>
                            <td style="margin: 0.1px; padding: 0;">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td style="margin: 0.1px; padding: 0; font: 15.1px/19.1px Verdana;"><span style="color: #000000; font: bold 15px Verdana;">{{NAME}}</span>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 2px 0 0; font: 10.1px/12.7px Verdana;"><span style="color: #159ce8; font: italic 10px Verdana;">{{POSITION}}</span>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 2px 0 0;">
                                            <table cellpadding="0" style="border-collapse: collapse;">
                                                <tr>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;"><img src="./resources/email-ea.png" alt="" style="display: block;" width="14" /></td>
                                                    <td style="margin: 0.1px; padding: 0; font: 9.1px/11.4px Verdana;">
                                                        <a style="text-decoration: none; color: #000000; font: 9px Verdana;" target="_blank">{{EMAIL}}</a>&nbsp;
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 2px 0 0;">
                                            <table cellpadding="0" style="border-collapse: collapse;">
                                                <tr>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;"><img src="./resources/website-ea.png" alt="" style="display: block;" width="14" /></td>
                                                    <td style="margin: 0.1px; padding: 0; font: 9.1px/11.4px Verdana;">
                                                        <a href="https://voov.io/" style="text-decoration: none; color: #000000; font: 9px Verdana;" target="_blank">www.voov.io</a>&nbsp;
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td height="10" style="margin: 0.1px; padding: 0; font-size: 0.1px; line-height: 0.1px; border-bottom: 3px solid #159ce8;"></td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 10px 0 0; font-family: Verdana; color: #000000; font-size: 11px; font-weight: bold;">Follow our Social Media</td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 5px 0 0;">
                                            <table cellpadding="0" style="border-collapse: collapse;">
                                                <tr>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                        <a href="https://www.facebook.com/VOOVYourTopVirtualAssistantPartner" target="_blank"><img src="./resources/facebook-ea.png" width="20" valign="top" alt="facebook" /></a>
                                                    </td>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                        <a href="https://www.instagram.com/voov_north_america/" target="_blank">
                                                            <img src="./resources/instagram-ea.png" width="20" valign="top" alt="instagram" />
                                                        </a>
                                                    </td>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                        <a href="https://www.youtube.com/@VOOV_Group/videos" target="_blank"><img src="./resources/youtube-ea.png" width="20" valign="top" alt="youtube" /></a>
                                                    </td>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                        <a href="https://www.linkedin.com/company/98386716" target="_blank">
                                                            <img src="./resources/linkeding-ea.png" width="20" valign="top" alt="linkedin" />
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td style="margin: 0.1px; padding: 10px 0 0; line-height: 1px; font-size: 1px;">
                    <a href="https://voov.io/" target="_blank"><img src="./resources/banner-voov.gift" width="350" style="outline: 0;" alt="banner" /></a>
                </td>
            </tr>
            <tr>
                <td style="margin: 0.1px; padding: 10px 0 0 0; font: 8px/10.2px Arial; color: #000000;">
                    <div>
                        IMPORTANT: This message is confidential. It may also be privileged or otherwise protected by work product immunity or other legal rules. If you have received it by mistake, please let us know by e-mail reply and
                        delete it from your system; you may not copy this message or disclose its contents to anyone.
                    </div>
                </td>
            </tr>
        </table>
    </body>
</html>

    `,
    marketing: `
      <!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1" />
    </head>
    <body>
        <table cellpadding="0" width="600" style="border-collapse: collapse; font-size: 14px;">
            <tr>
                <td style="margin: 0.1px; padding: 0;">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <td valign="top" style="margin: 0.1px; padding: 0 15px 0 0;"><img src="{{IMAGE}}" width="130" style="display: block;" alt="photo-logo" /></td>
                            <td style="margin: 0.1px; padding: 0;">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td style="margin: 0.1px; padding: 0; font: 15.1px/19.1px Verdana;"><span style="color: #000000; font: bold 15px Verdana;">{{NAME}}</span>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 2px 0 0; font: 10.1px/12.7px Verdana;"><span style="color: #ffce00; font: italic 10px Verdana;">{{POSITION}}</span>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 2px 0 0;">
                                            <table cellpadding="0" style="border-collapse: collapse;">
                                                <tr>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;"><img src="./resources/email-mk.png" alt="" style="display: block;" width="14" /></td>
                                                    <td style="margin: 0.1px; padding: 0; font: 9.1px/11.4px Verdana;">
                                                        <a  style="text-decoration: none; color: #000000; font: 9px Verdana;" target="_blank">{{EMAIL}}</a>&nbsp;
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 2px 0 0;">
                                            <table cellpadding="0" style="border-collapse: collapse;">
                                                <tr>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;"><img src="./resources/website-mk.png" alt="" style="display: block;" width="14" /></td>
                                                    <td style="margin: 0.1px; padding: 0; font: 9.1px/11.4px Verdana;">
                                                        <a href="https://voov.io/" style="text-decoration: none; color: #000000; font: 9px Verdana;" target="_blank">www.voov.io</a>&nbsp;
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td height="10" style="margin: 0.1px; padding: 0; font-size: 0.1px; line-height: 0.1px; border-bottom: 3px solid #ffce00;"></td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 10px 0 0; font-family: Verdana; color: #000000; font-size: 11px; font-weight: bold;">Follow our Social Media</td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 5px 0 0;">
                                            <table cellpadding="0" style="border-collapse: collapse;">
                                                <tr>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                        <a href="https://www.facebook.com/VOOVYourTopVirtualAssistantPartner" target="_blank"><img src="./resources/facebook-mk.png" width="20" valign="top" alt="facebook" /></a>
                                                    </td>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                        <a href="https://www.instagram.com/voov_north_america/" target="_blank">
                                                            <img src="./resources/instagram-mk.png" width="20" valign="top" alt="instagram" />
                                                        </a>
                                                    </td>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                        <a href="https://www.youtube.com/@VOOV_Group/videos" target="_blank"><img src="./resources/youtube-mk.png" width="20" valign="top" alt="youtube" /></a>
                                                    </td>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                        <a href="https://www.linkedin.com/company/98386716" target="_blank">
                                                            <img src="./resources/linkeding-mk.png" width="20" valign="top" alt="linkedin" />
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td style="margin: 0.1px; padding: 10px 0 0; line-height: 1px; font-size: 1px;">
                    <a href="https://voov.io/" target="_blank"><img src="./resources/banner-voov.gift" width="350" style="outline: 0;" alt="banner" /></a>
                </td>
            </tr>
            <tr>
                <td style="margin: 0.1px; padding: 10px 0 0 0; font: 8px/10.2px Arial; color: #000000;">
                    <div>
                        IMPORTANT: This message is confidential. It may also be privileged or otherwise protected by work product immunity or other legal rules. If you have received it by mistake, please let us know by e-mail reply and
                        delete it from your system; you may not copy this message or disclose its contents to anyone.
                    </div>
                </td>
            </tr>
        </table>
    </body>
</html>

    `,
    isa: `
      <!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1" />
    </head>
    <body>
        <table cellpadding="0" width="600" style="border-collapse: collapse; font-size: 14px;">
            <tr>
                <td style="margin: 0.1px; padding: 0;">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <td valign="top" style="margin: 0.1px; padding: 0 15px 0 0;"><img src="{{IMAGE}}" width="130" style="display: block;" alt="photo-logo" /></td>
                            <td style="margin: 0.1px; padding: 0;">
                                <table cellpadding="0" style="border-collapse: collapse;">
                                    <tr>
                                        <td style="margin: 0.1px; padding: 0; font: 15.1px/19.1px Verdana;"><span style="color: #000000; font: bold 15px Verdana;">{{NAME}}</span>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 2px 0 0; font: 10.1px/12.7px Verdana;"><span style="color: #81ce24; font: italic 10px Verdana;">{{POSITION}}</span>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 2px 0 0;">
                                            <table cellpadding="0" style="border-collapse: collapse;">
                                                <tr>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;"><img src="./resources/email-isa.png" alt="" style="display: block;" width="14" /></td>
                                                    <td style="margin: 0.1px; padding: 0; font: 9.1px/11.4px Verdana;">
                                                        <a  style="text-decoration: none; color: #000000; font: 9px Verdana;" target="_blank">{{EMAIL}}</a>&nbsp;
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 2px 0 0;">
                                            <table cellpadding="0" style="border-collapse: collapse;">
                                                <tr>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;"><img src="./resources/website-isa.png" alt="" style="display: block;" width="14" /></td>
                                                    <td style="margin: 0.1px; padding: 0; font: 9.1px/11.4px Verdana;">
                                                        <a href="https://voov.io/" style="text-decoration: none; color: #000000; font: 9px Verdana;" target="_blank">www.voov.io</a>&nbsp;
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td height="10" style="margin: 0.1px; padding: 0; font-size: 0.1px; line-height: 0.1px; border-bottom: 3px solid #81ce24;"></td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 10px 0 0; font-family: Verdana; color: #000000; font-size: 11px; font-weight: bold;">Follow our Social Media</td>
                                    </tr>
                                    <tr>
                                        <td style="margin: 0.1px; padding: 5px 0 0;">
                                            <table cellpadding="0" style="border-collapse: collapse;">
                                                <tr>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                        <a href="https://www.facebook.com/VOOVYourTopVirtualAssistantPartner" target="_blank"><img src="./resources/facebook-isa.png" width="20" valign="top" alt="facebook" /></a>
                                                    </td>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                        <a href="https://www.instagram.com/voov_north_america/" target="_blank">
                                                            <img src="https://img.newoldstamp.com/i/20/1/1/81ce24/98.png?t=c4" width="20" valign="top" alt="instagram" />
                                                        </a>
                                                    </td>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                        <a href="https://www.youtube.com/@VOOV_Group/videos" target="_blank"><img src="./resources/youtube-isa.png" width="20" valign="top" alt="youtube" /></a>
                                                    </td>
                                                    <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                        <a href="https://www.linkedin.com/company/98386716" target="_blank">
                                                            <img src="./resources/linkeding-isa.png" width="20" valign="top" alt="linkedin" />
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td style="margin: 0.1px; padding: 10px 0 0; line-height: 1px; font-size: 1px;">
                    <a href="https://img.newoldstamp.com/r/636997/b" target="_blank"><img src="./resources/banner-voov.gift" width="350" style="outline: 0;" alt="banner" /></a>
                </td>
            </tr>
            <tr>
                <td style="margin: 0.1px; padding: 10px 0 0 0; font: 8px/10.2px Arial; color: #000000;">
                    <div>
                        IMPORTANT: This message is confidential. It may also be privileged or otherwise protected by work product immunity or other legal rules. If you have received it by mistake, please let us know by e-mail reply and
                        delete it from your system; you may not copy this message or disclose its contents to anyone.
                    </div>
                </td>
            </tr>
        </table>
    </body>
</html>

    `,
    it: `
      <!DOCTYPE html>
<html>
  <head>
      <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1" />
  </head>
  <body>
      <table cellpadding="0" width="600" style="border-collapse: collapse; font-size: 14px;">
          <tr>
              <td style="margin: 0.1px; padding: 0;">
                  <table cellpadding="0" style="border-collapse: collapse;">
                      <tr>
                          <td valign="top" style="margin: 0.1px; padding: 0 15px 0 0;"><img src="{{IMAGE}}" width="130" style="display: block;" alt="photo-logo" /></td>
                          <td style="margin: 0.1px; padding: 0;">
                              <table cellpadding="0" style="border-collapse: collapse;">
                                  <tr>
                                      <td style="margin: 0.1px; padding: 0; font: 15.1px/19.1px Verdana;"><span style="color: #000000; font: bold 15px Verdana;">{{NAME}}</span>&nbsp;</td>
                                  </tr>
                                  <tr>
                                      <td style="margin: 0.1px; padding: 2px 0 0; font: 10.1px/12.7px Verdana;"><span style="color: #e82300; font: italic 10px Verdana;">{{POSITION}}</span>&nbsp;</td>
                                  </tr>
                                  <tr>
                                      <td style="margin: 0.1px; padding: 2px 0 0;">
                                          <table cellpadding="0" style="border-collapse: collapse;">
                                              <tr>
                                                  <td style="margin: 0.1px; padding: 0 5px 0 0;"><img src="./resources/email-ti.png" alt="" style="display: block;" width="14" /></td>
                                                  <td style="margin: 0.1px; padding: 0; font: 9.1px/11.4px Verdana;">
                                                      <a style="text-decoration: none; color: #000000; font: 9px Verdana;" target="_blank">{{EMAIL}}</a>&nbsp;
                                                  </td>
                                              </tr>
                                          </table>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td style="margin: 0.1px; padding: 2px 0 0;">
                                          <table cellpadding="0" style="border-collapse: collapse;">
                                              <tr>
                                                  <td style="margin: 0.1px; padding: 0 5px 0 0;"><img src="./resources/website-ti.png" alt="" style="display: block;" width="14" /></td>
                                                  <td style="margin: 0.1px; padding: 0; font: 9.1px/11.4px Verdana;">
                                                      <a href="https://voov.io/" style="text-decoration: none; color: #000000; font: 9px Verdana;" target="_blank">www.voov.io</a>&nbsp;
                                                  </td>
                                              </tr>
                                          </table>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td height="10" style="margin: 0.1px; padding: 0; font-size: 0.1px; line-height: 0.1px; border-bottom: 3px solid #e82300;"></td>
                                  </tr>
                                  <tr>
                                      <td style="margin: 0.1px; padding: 10px 0 0; font-family: Verdana; color: #000000; font-size: 11px; font-weight: bold;">Follow our Social Media</td>
                                  </tr>
                                  <tr>
                                      <td style="margin: 0.1px; padding: 5px 0 0;">
                                          <table cellpadding="0" style="border-collapse: collapse;">
                                              <tr>
                                                  <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                      <a href="https://www.facebook.com/VOOVYourTopVirtualAssistantPartner" target="_blank"><img src="./resources/facebook-it.png" width="20" valign="top" alt="facebook" /></a>
                                                  </td>
                                                  <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                      <a href="https://www.instagram.com/voov_north_america/" target="_blank">
                                                          <img src="./resources/instagram-ti.png" width="20" valign="top" alt="instagram" />
                                                      </a>
                                                  </td>
                                                  <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                      <a href="https://www.youtube.com/@VOOV_Group/videos" target="_blank"><img src="./resources/youtube-ti.png" width="20" valign="top" alt="youtube" /></a>
                                                  </td>
                                                  <td style="margin: 0.1px; padding: 0 5px 0 0;">
                                                      <a href="https://www.linkedin.com/company/98386716" target="_blank">
                                                          <img src="./resources/linkeding-ti.png" width="20" valign="top" alt="linkedin" />
                                                      </a>
                                                  </td>
                                              </tr>
                                          </table>
                                      </td>
                                  </tr>
                              </table>
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
          <tr>
              <td style="margin: 0.1px; padding: 10px 0 0; line-height: 1px; font-size: 1px;">
                  <a href="https://voov.io/" target="_blank"><img src="./resources/banner-voov.gift" width="350" style="outline: 0;" alt="banner" /></a>
              </td>
          </tr>
          <tr>
              <td style="margin: 0.1px; padding: 10px 0 0 0; font: 8px/10.2px Arial; color: #000000;">
                  <div>
                      IMPORTANT: This message is confidential. It may also be privileged or otherwise protected by work product immunity or other legal rules. If you have received it by mistake, please let us know by e-mail reply and
                      delete it from your system; you may not copy this message or disclose its contents to anyone.
                  </div>
              </td>
          </tr>
      </table>
  </body>
</html>

    `
  };

  export default templates;