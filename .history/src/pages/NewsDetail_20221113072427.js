import React from "react";
import List from "../components/List";
import { Navbar } from "../components/Navbar";
import logo from "../Images/favicon.ico";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function NewsDetail(data) {
  const location = useLocation();
  const article = location.state;
  return (
    <div className="mb-10">
      <div className=" block">
        <Navbar />
        <div>
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-10 mx-auto">
              <div class="flex items-center lg:w-4/5 mx-20 pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center text-indigo-500 flex-shrink-0">
                  <img src={logo} alt="image" />
                </div>
                <div class="flex-grow sm:text-left mt-6 sm:mt-0">
                  <h2 class="text-gray-900 text-3xl title-font font-bold mb-2">
                    {article.title}
                  </h2>
                  <p class="leading-relaxed text-base">
                    {article.author} | {Date(article.publishedAt)}
                  </p>
                </div>
              </div>
            </div>
            <p className="m-44 -mt-24 mr-96 font-justify h-screen overflow-clip">
              {article.}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              feugiat luctus ex, sit amet tincidunt purus semper et. Morbi in
              nunc sit amet mi facilisis molestie. Etiam ex augue, maximus vel
              nisi nec, sollicitudin tincidunt velit. Fusce ut quam eget arcu
              gravida maximus. Praesent nec mauris eu nisl fringilla euismod nec
              sit amet quam. Sed leo odio, pretium sit amet ex porta, eleifend
              suscipit magna. Nam dictum risus urna, et tempor augue facilisis
              sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia curae; Fusce sodales neque suscipit erat
              ultricies vestibulum. Morbi lectus neque, pulvinar eu nulla ut,
              porta eleifend dui. Vivamus sed suscipit sem, quis dapibus quam.
              Aliquam faucibus dui a lacinia pulvinar. Nunc porttitor feugiat
              ipsum varius rhoncus. Maecenas sodales ultrices felis ut
              efficitur. In in pulvinar lorem, ultricies fermentum eros. Duis ut
              lectus quis tortor efficitur suscipit. Praesent sed ex ut lectus
              imperdiet fermentum gravida sed augue. Proin vehicula, justo sed
              aliquam hendrerit, mi odio pellentesque elit, accumsan imperdiet
              turpis dui vitae purus. Suspendisse sit amet ex id elit imperdiet
              volutpat vel facilisis arcu. Morbi sit amet magna eu purus
              consectetur facilisis. Praesent semper nunc quis placerat viverra.
              Integer sollicitudin augue nec elit semper, in efficitur nibh
              euismod. Aliquam rutrum elit in nisl dictum iaculis. Aliquam metus
              purus, rhoncus faucibus scelerisque pharetra, pharetra id eros.
              Nam tempor nulla cursus metus vestibulum, eget blandit augue
              volutpat. In hac habitasse platea dictumst. Morbi scelerisque
              pretium leo et tempus. Praesent sit amet nibh vel augue varius
              aliquam. Aliquam dignissim mattis maximus. Vivamus eu est congue
              nunc tincidunt malesuada sit amet sed erat. Quisque ut iaculis
              sem, eu placerat purus. Phasellus non convallis magna, ut eleifend
              nulla. Pellentesque malesuada velit lectus, in molestie magna
              eleifend quis. Pellentesque pellentesque turpis vitae nulla auctor
              fermentum. Vivamus ac iaculis felis, vitae tristique urna.
              Praesent non mi est. Quisque ultrices facilisis mi, luctus tempor
              neque aliquam id. Ut quis ex eleifend, suscipit urna sit amet,
              semper nunc. Integer venenatis imperdiet ligula in iaculis.
              Integer pulvinar faucibus arcu et eleifend. Ut posuere mi eget
              diam tempor, vel placerat ante dictum. Sed convallis placerat erat
              eget finibus. Aenean eget porttitor risus, vitae dapibus mauris.
              Mauris massa sem, condimentum eu lorem eget, volutpat rhoncus
              lacus. Donec quis arcu felis. Nullam quam purus, sodales et
              vestibulum a, aliquam ut dolor. Vivamus quis placerat nisl.
              Integer in mauris interdum, viverra nisi quis, tincidunt mi.
              Aliquam erat volutpat. Fusce blandit nibh magna, elementum dapibus
              sem volutpat id. Nam condimentum egestas odio a vulputate. Quisque
              id libero eu purus tempus viverra. Nulla risus metus, bibendum non
              consectetur eu, rhoncus vitae odio. Aenean scelerisque nunc a
              velit aliquam sodales.{" "}
              <span className="blur-sm">
                {" "}
                Donec a urna vitae felis pulvinar auctor nec eu augue. Ut
                hendrerit quis ante non ultrices. Integer nulla lorem, vehicula
                sed urna non, auctor auctor leo. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. In est ipsum, vehicula eget
                eleifend non, interdum eu enim. Mauris sagittis augue non felis
                cursus, at iaculis lacus rhoncus. Morbi at facilisis erat.
                Suspendisse potenti. Aenean a magna ac enim consequat porta a et
                augue. Nulla congue libero tellus, ut euismod massa tincidunt
                et. Nullam et enim efficitur, tempus augue sit amet, mollis
                felis. Maecenas vitae orci justo. Fusce pretium vel lacus quis
                porttitor. Suspendisse nec massa vel magna blandit sagittis.
                Donec convallis nec odio eu sagittis. Praesent ut auctor tellus.
                Etiam quis lectus odio. Integer ac ultrices tellus. Cras varius
                risus semper nulla imperdiet lacinia. Donec eu augue sem. Cras
                facilisis ipsum vel egestas facilisis. Duis erat urna, lacinia
                id sodales ac, tincidunt id leo. Nullam non ante velit. Vivamus
                nec congue lorem, eu tincidunt odio. Curabitur tempor elit ante,
                et rutrum odio blandit sit amet. Nulla urna nulla, mollis nec
                tempor ut, malesuada ac sapien. Vestibulum placerat, purus vel
                laoreet molestie, libero est molestie dolor, vitae suscipit
                lectus orci et diam. Duis sodales massa vel massa ultricies
                mollis in nec lectus. Sed pharetra euismod laoreet. Curabitur
                ante purus, finibus in cursus sit amet, placerat eget mi. Donec
                risus sem, commodo et ipsum eget, aliquam lobortis libero. Proin
                id enim mauris. Phasellus auctor varius elit eu eleifend. Aenean
                egestas leo convallis, volutpat orci a, tincidunt odio. Donec
                aliquam nulla in risus pulvinar, at accumsan eros fringilla.
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
              </span>
            </p>
            <div className="text-center -ml-44 -mt-36 text-blue-600">
              <Link to="/login" className="">
                Read More...
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default NewsDetail;
