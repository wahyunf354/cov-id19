const main = () => {
  const main = document.querySelector("main");

  main.innerHTML = `
    <!-- global -->
    <section id="main-global" class="main-global">
        <div class="main">
            <!-- chart -->
            <div class="chart-container">
                <canvas id="chartGlobal"></canvas>
            </div>
            <!-- end chart -->

            <!-- data global -->
            <div class="data-global">
                <div class="title">Global Cases</div>
                <div class="date"> </div>
                <div class="ifected-data">
                    <p>Terinfeksi :</p>
                </div>
                <div class="bundle-data">
                    <div class="died-data">
                        <p>Meninggal :</p>
                    </div>
                    <div class="recover-data">
                        <p>Sembuh :</p>
                    </div>
                </div>
            </div>
            <!-- end data global -->
        </div>
    </section>
    <!-- end global -->

    <!-- regional -->
    <section class="regional" id="regional">
        <div class="container-regional">
            <h1>Cases in Countries</h1>
            <!-- search -->
            <search-country></search-country>
            <!-- end search -->

            <!-- covid country -->
            <div class="data-regional"></div>
            <!-- end covid country -->
        </div>
    </section>
    <!-- end regional -->

    <!-- news -->
    <section class="news" id="news">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="title-news text-center mb-4">News</h1>
                </div>
            </div>
            <div class="container" id="content-news"></div>
        </div>
    </section>
    <!-- end news -->
    `;
};

export default main;
