
class iframes {
    const getIframeDocument = () => {
        return cy
        .get('div[id="AdThrive_Content_1_desktop"] iframe')
        .its('0.contentDocument').should('exist')
      }
      
      const getIframeBody = () => {
        return getIframeDocument()
        .its('body').should('not.be.undefined').then(cy.wrap)
      }


}

export default iframes;


// data-google-av-cxn
// https://securepubads.g.doubleclick.net/pcs/view?xai=AKAOjsuRdh8vgWUDTpzmxbs9w9v_7oMEc_OIeEK7NnUXpmk09jUe__SUVy3Nij1nwrw_AFDbvI_whBEm-5reaUT91ucyjr-_qQxEAwk6GnvFEyuDpC_PZUhL5JNYq0A8LyelNwlWNRBtwlzMmE3bgxzSzFwDsYWl7HliClNT0tNumngxs4DdNnuiD3WJOHqsv1y6ip3J7G_fpWMuwCM5--vB7fZy3tyWbUsv6ViKMwsaVxv2Q5M8ZbLe5p2M1ttsMg3HYbUBou8NNdZrMU1lHhWPdSZVFlHk4UHirj3NK-R_95ml6Z01-s1nYiiqw3tcyHFW3xpML70rTiJ4jtcoJX3s7xbIzln62eBAzdKvopK3fxmTPs4MI_yJ&sai=AMfl-YR-WNjql6iR2CZu2SbIYIQPAQy3lOFaDmgaDTnyq5ch-nQshjiJz8_PbQ8cVRRgVmJ14BAJpLPLjRl4jTnFkwb2-2eCzlb1JFVECuq3P4dzzM263IIM0hjLLtwBfwGiHTnp2CLb2ykdQJJZ9Jm7y-0&sig=Cg0ArKJSzBGzzWFb7KvhEAE&uach_m=[UACH]&urlfix=1&adurl=

// https://securepubads.g.doubleclick.net/pcs/view?xai=AKAOjstCMxm14Af6PzpcsC5mwYxVc8l_QDQ-gM7HI81xqRsohWIhP7rgfqy7TcTgs16xwNh7znsLRm-ok3mhxNFcqK2p6rtDeH-VVVmK37CJepUCqAKbq8ISAJKfH__ZQVg-gd59a8c4GBSP4QYnqiuNZuH6tb0sZhZlkVqojU8BlcvGmRBUOsWo_jnNf3sTM5fpeKUD7_fp89yJlrpjUnuhCRrs4dEar8ksyGxSBSDFcGscGq3DxMYgH12WkOo8PSHQQl70rwsFfNv1OAuChjIFqLOB3Pg2Qi_gcGvuWnMBwbPm6daz7GYoKTAqAz3d9AWYyxAhiDlh8-dALw_TkIdVdET5i8Yx35Hrj__hjCZX2t-ZAk3oUHC_&sai=AMfl-YTJkZ72skH3V1Qi_RJ52yGjlpPLoeOTZ-Lbk3uNLtaHPgoATNCY3qVEW42Hx04JifkA2a6i4jYZRlBwluESsu8NZypY1MxE3cvrMq0qQAmV4NPpVFLS44salA8S2uNtRkOPzrY1bqrGSrPVBb_I-sY&sig=Cg0ArKJSzBiFEgqANjdREAE&uach_m=[UACH]&urlfix=1&adurl=

// https://securepubads.g.doubleclick.net/pcs/view?xai=AKAOjsuxpITF1SIlQyujVdDOcI0yiLxcY0xfhdcKfBUX0uqR9juZGlYP428pCV_qIFnpCgC-RnAr6zJdjVXx7tmJL37DnY_QH_-ZB7FyJAhml7Et_kgNtSKoPTl9JhFJll71-vX0Yu9f7Q3EVybWP6OIOgNBarNi-Nn0_yYdMnrQNMGRxkguF3LfhPJ3ds8Es4Ow73wpBzqDIkzZIbb5mm9ZkEA4UyK0iSqLbYTpbcfRZHAzqFKcxJpL8UzBNCrlbyoeyCw7_N3oBASVAy4EXIqgV2SasGD7jxU0YsIZpx_5vEge1q1Xdnd37Mo0W7Lo7gUKT4Vrly7tdiR6dNwYCmg8BxiHy_tvbiCf-E1GehzjLGtcq5zxkMZu&sai=AMfl-YRkLzhun8kDV1x4JxYk57bIHGHZ1jc75oHDnElUDcHOGUgGy6daSTeCX-1Wh6eVaE5rvGZ_3GnekpwNY93r9oww4aDTqk0klX0PhYMmx9ZKTSngd6sAH0oCzcUcpXOmXUQVmQ2XacsWG0TKpPhfVuw&sig=Cg0ArKJSzEiQErXlITsLEAE&uach_m=[UACH]&urlfix=1&adurl=


// https://www.googletagservices.com/activeview/js/current/rx_lidar.js?cache=r20110914


// googleActiveViewDisplayScript src="https://www.googletagservices.com/activeview/js/current/rx_lidar.js?cache=r20110914"
//                               src="https://www.googletagservices.com/activeview/js/current/rx_lidar.js?cache=r20110914"

