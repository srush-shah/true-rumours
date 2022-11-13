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
            <p className="m-44 -mt-24 mr-96 font-justify">
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
              velit aliquam sodales. Donec a urna vitae felis pulvinar auctor
              nec eu augue. Ut hendrerit quis ante non ultrices. Integer nulla
              lorem, vehicula sed urna non, auctor auctor leo. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. In est ipsum, vehicula eget
              eleifend non, interdum eu enim. Mauris sagittis augue non felis
              cursus, at iaculis lacus rhoncus. Morbi at facilisis erat.
              Suspendisse potenti. Aenean a magna ac enim consequat porta a et
              augue. Nulla congue libero tellus, ut euismod massa tincidunt et.
              Nullam et enim efficitur, tempus augue sit amet, mollis felis.
              Maecenas vitae orci justo. Fusce pretium vel lacus quis porttitor.
              Suspendisse nec massa vel magna blandit sagittis. Donec convallis
              nec odio eu sagittis. Praesent ut auctor tellus. Etiam quis lectus
              odio. Integer ac ultrices tellus. Cras varius risus semper nulla
              imperdiet lacinia. Donec eu augue sem. Cras facilisis ipsum vel
              egestas facilisis. Duis erat urna, lacinia id sodales ac,
              tincidunt id leo. Nullam non ante velit. Vivamus nec congue lorem,
              eu tincidunt odio. Curabitur tempor elit ante, et rutrum odio
              blandit sit amet. Nulla urna nulla, mollis nec tempor ut,
              malesuada ac sapien. Vestibulum placerat, purus vel laoreet
              molestie, libero est molestie dolor, vitae suscipit lectus orci et
              diam. Duis sodales massa vel massa ultricies mollis in nec lectus.
              Sed pharetra euismod laoreet. Curabitur ante purus, finibus in
              cursus sit amet, placerat eget mi. Donec risus sem, commodo et
              ipsum eget, aliquam lobortis libero. Proin id enim mauris.
              Phasellus auctor varius elit eu eleifend. Aenean egestas leo
              convallis, volutpat orci a, tincidunt odio. Donec aliquam nulla in
              risus pulvinar, at accumsan eros fringilla. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Fusce nunc ex, elementum id purus eu, mattis ultricies sem. In
              hendrerit mattis vehicula. Aenean molestie lacinia lacus nec
              commodo. Nunc consequat auctor ipsum at venenatis. Sed vulputate
              est a odio hendrerit consectetur in varius orci. Aenean iaculis
              commodo massa a aliquet. Proin rutrum vestibulum lectus, ac
              lobortis diam laoreet eu. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Fusce fringilla sem quis urna auctor, et dictum
              dolor egestas. Suspendisse potenti. Nulla justo nunc, aliquam id
              ullamcorper placerat, ullamcorper ac est. Nullam rutrum lacus sit
              amet luctus tempor. Nunc non commodo nulla. Vestibulum nec justo
              in tortor scelerisque luctus eget porttitor dolor. Donec id
              lacinia diam. Donec ut elit non nunc vulputate rhoncus. Aliquam
              ultricies laoreet lectus, sit amet viverra nulla auctor in. In hac
              habitasse platea dictumst. Quisque sit amet sagittis dui, a
              vehicula sem. Suspendisse dolor augue, varius at accumsan quis,
              vulputate ac nibh. Sed efficitur venenatis velit ut molestie.
              Curabitur gravida, odio et porttitor ornare, risus nisl euismod
              nibh, at molestie massa est non mi. Sed at massa massa. Praesent
              pulvinar facilisis tortor a fermentum. Vestibulum tempor rutrum
              felis vitae mollis. Phasellus in ultrices odio. Proin rhoncus
              vitae est non lacinia. Mauris mi nibh, dignissim at vehicula nec,
              consectetur sit amet odio. Proin quis dignissim erat. Donec
              porttitor purus non ultrices faucibus. Maecenas vulputate dictum
              tempor. Aliquam erat volutpat. Mauris leo velit, ornare et eros
              sed, vulputate ullamcorper arcu. Curabitur lacus leo, egestas sed
              nulla eget, dictum dictum mauris. Fusce rhoncus, lacus nec
              vehicula aliquam, urna felis placerat ante, vitae ultricies velit
              est ac sem. Pellentesque sit amet orci imperdiet, varius erat
              quis, sodales eros. Aenean non volutpat augue. Morbi ac turpis
              molestie, vulputate erat nec, viverra leo. Proin consectetur
              turpis in lacus congue vehicula. Curabitur facilisis placerat diam
              vel laoreet. Pellentesque nec eleifend nibh. Vivamus at tellus eu
              ipsum consequat vestibulum non maximus justo. Vestibulum felis ex,
              cursus eget justo sed, mattis pellentesque neque. Aliquam vehicula
              orci eu turpis faucibus varius. Vestibulum gravida interdum
              fermentum. Sed eu sapien a erat lacinia efficitur sit amet at sem.
              Aenean tristique egestas neque, sit amet facilisis turpis
              porttitor non. Nullam elit purus, semper eget ullamcorper a,
              posuere quis sem. In hac habitasse platea dictumst. Ut consectetur
              pharetra orci, et aliquam turpis sodales sed. Ut non tellus in ex
              rhoncus placerat. Ut eleifend augue erat. Pellentesque in semper
              est. Phasellus accumsan nibh ac quam laoreet, in posuere sem
              condimentum. Aenean lobortis nisi ac quam elementum, nec viverra
              nisl placerat. Sed cursus mi nec urna convallis feugiat. Fusce
              rutrum eleifend tincidunt. Suspendisse potenti. Suspendisse nec
              euismod urna. Nullam aliquam ut augue vitae auctor. Sed a
              malesuada felis. Mauris interdum augue orci, quis fringilla neque
              ultrices vel. Nullam ligula diam, eleifend vitae dui quis,
              vulputate dictum dolor. Aliquam blandit, dui at pharetra accumsan,
              lacus nisl tempor dui, sit amet pulvinar ex erat ac orci.
              Pellentesque rutrum, sapien quis aliquet facilisis, nunc nisl
              sodales purus, sit amet faucibus libero odio sit amet magna.
              Aliquam semper libero in luctus sollicitudin. Donec pharetra,
              libero quis bibendum fringilla, erat ante placerat nisl, fermentum
              dignissim elit mauris vitae nunc. Nullam efficitur luctus risus eu
              pulvinar. Sed finibus odio non libero tempus, et pretium leo
              convallis. Nulla ac varius nibh. Sed non faucibus lacus, in
              fringilla tortor. Aliquam non elit porta, luctus odio a, ultricies
              libero.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default NewsDetail;
