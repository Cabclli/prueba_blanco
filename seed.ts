import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // Crear categorías individualmente
  const cpuCategory = await prisma.category.create({ data: { name: "CPU" } });
  const gpuCategory = await prisma.category.create({ data: { name: "GPU" } });
  const ramCategory = await prisma.category.create({ data: { name: "Memoria RAM" } });
  const storageCategory = await prisma.category.create({ data: { name: "Almacenamiento" } });
  const motherboardCategory = await prisma.category.create({ data: { name: "Placas Madre" } });
  const powerSupplyCategory = await prisma.category.create({ data: { name: "Fuentes de Poder" } });
  const caseCategory = await prisma.category.create({ data: { name: "Gabinetes" } });
  const coolingCategory = await prisma.category.create({ data: { name: "Refrigeración" } });

  // Crear subcategorías individualmente
  const intelSubcategory = await prisma.subcategory.create({ data: { name: "Intel", categoryId: cpuCategory.id } });
  const amdCpuSubcategory = await prisma.subcategory.create({ data: { name: "AMD", categoryId: cpuCategory.id } });
  const nvidiaGpuSubcategory = await prisma.subcategory.create({ data: { name: "NVIDIA", categoryId: gpuCategory.id } });
  const amdGpuSubcategory = await prisma.subcategory.create({ data: { name: "AMD", categoryId: gpuCategory.id } });
  const ddr4Subcategory = await prisma.subcategory.create({ data: { name: "DDR4", categoryId: ramCategory.id } });
  const ddr5Subcategory = await prisma.subcategory.create({ data: { name: "DDR5", categoryId: ramCategory.id } });
  const ssdSubcategory = await prisma.subcategory.create({ data: { name: "SSD", categoryId: storageCategory.id } });
  const hddSubcategory = await prisma.subcategory.create({ data: { name: "HDD", categoryId: storageCategory.id } });
  const atxCaseSubcategory = await prisma.subcategory.create({ data: { name: "ATX", categoryId: caseCategory.id } });
  const midTowerCaseSubcategory = await prisma.subcategory.create({ data: { name: "Mid Tower", categoryId: caseCategory.id } });
  const airCoolingSubcategory = await prisma.subcategory.create({ data: { name: "Aire", categoryId: coolingCategory.id } });
  const liquidCoolingSubcategory = await prisma.subcategory.create({ data: { name: "Líquida", categoryId: coolingCategory.id } });
  const bronzePowerSupplySubcategory = await prisma.subcategory.create({ data: { name: "80 Plus Bronze", categoryId: powerSupplyCategory.id } });
  const goldPowerSupplySubcategory = await prisma.subcategory.create({ data: { name: "80 Plus Gold", categoryId: powerSupplyCategory.id } });
  const atxMotherboardSubcategory = await prisma.subcategory.create({ data: { name: "ATX", categoryId: motherboardCategory.id } });
  const microAtxMotherboardSubcategory = await prisma.subcategory.create({ data: { name: "Micro ATX", categoryId: motherboardCategory.id } });
  const miniItxMotherboardSubcategory = await prisma.subcategory.create({ data: { name: "Mini ITX", categoryId: motherboardCategory.id } });

  // Crear componentes con referencias de categoría y subcategoría en `properties`
  await prisma.component.create({
    data: {
      name: "Procesador Intel Core i9-13900K, 3.90GHz",
      price: 499.99,
      stock: 30,
      categoryId: cpuCategory.id,
      subcategoryId: intelSubcategory.id,
      properties: JSON.stringify({
        frecuencia: "3.90GHz",
        núcleos: 24,
        hilos: 32,
        caché: "36MB",
        tdp: "125W",
        subcategoria: intelSubcategory.name,
      }),
    },
  });

  await prisma.component.create({
    data: {
      name: "Procesador AMD Ryzen 9 5900X, 3.70GHz",
      price: 399.99,
      stock: 25,
      categoryId: cpuCategory.id,
      subcategoryId: amdCpuSubcategory.id,
      properties: JSON.stringify({
        frecuencia: "3.70GHz",
        núcleos: 12,
        hilos: 24,
        caché: "70MB",
        tdp: "105W",
        subcategoria: amdCpuSubcategory.name,
      }),
    },
  });

  await prisma.component.create({
    data: {
      name: "Tarjeta Gráfica NVIDIA GeForce RTX 3080",
      price: 699.99,
      stock: 20,
      categoryId: gpuCategory.id,
      subcategoryId: nvidiaGpuSubcategory.id,
      properties: JSON.stringify({
        memoria: "10GB GDDR6X",
        frecuencia: "1.71GHz",
        anchoBanda: "760GB/s",
        tdp: "320W",
        salidas: "3x DisplayPort, 1x HDMI",
        subcategoria: nvidiaGpuSubcategory.name,
      }),
    },
  });

  await prisma.component.create({
    data: {
      name: "Tarjeta Gráfica AMD Radeon RX 6800 XT",
      price: 649.99,
      stock: 15,
      categoryId: gpuCategory.id,
      subcategoryId: amdGpuSubcategory.id,
      properties: JSON.stringify({
        memoria: "16GB GDDR6",
        frecuencia: "2.25GHz",
        anchoBanda: "512GB/s",
        tdp: "300W",
        salidas: "3x DisplayPort, 1x HDMI",
        subcategoria: amdGpuSubcategory.name,
      }),
    },
  });

  await prisma.component.create({
    data: {
      name: "Kit de Memoria Corsair Vengeance LPX de 32GB (2x16) DDR4 3200MHz",
      price: 79.99,
      stock: 50,
      categoryId: ramCategory.id,
      subcategoryId: ddr4Subcategory.id,
      properties: JSON.stringify({
        cantidadMemorias: 2,
        capacidad: "32GB",
        latencia: "16-18-18-36",
        rgb: "No",
        frecuencia: "3200MHz",
        tipoMemoria: "DDR4",
        subcategoria: ddr4Subcategory.name,
      }),
    },
  });

  await prisma.component.create({
    data: {
      name: "Kit de Memoria G.Skill Ripjaws V de 32GB (2x16) DDR5 3600MHz",
      price: 139.99,
      stock: 40,
      categoryId: ramCategory.id,
      subcategoryId: ddr5Subcategory.id,
      properties: JSON.stringify({
        cantidadMemorias: 2,
        capacidad: "32GB",
        latencia: "16-16-16-36",
        rgb: "Sí",
        frecuencia: "3600MHz",
        tipoMemoria: "DDR5",
        subcategoria: ddr5Subcategory.name,
      }),
    },
  });

  await prisma.component.create({
    data: {
      name: "SSD Samsung 970 EVO Plus de 1TB",
      price: 129.99,
      stock: 30,
      categoryId: storageCategory.id,
      subcategoryId: ssdSubcategory.id,
      properties: JSON.stringify({
        capacidad: "1TB",
        tipo: "NVMe",
        velocidadLectura: "3500MB/s",
        velocidadEscritura: "3300MB/s",
        formato: "M.2",
        subcategoria: ssdSubcategory.name,
      }),
    },
  });

  await prisma.component.create({
    data: {
      name: "Disco Duro Seagate Barracuda de 2TB",
      price: 59.99,
      stock: 25,
      categoryId: storageCategory.id,
      subcategoryId: hddSubcategory.id,
      properties: JSON.stringify({
        capacidad: "2TB",
        tipo: "Mecánico",
        velocidad: "7200 RPM",
        conexión: "SATA III",
        subcategoria: hddSubcategory.name,
      }),
    },
  });

  await prisma.component.create({
    data: {
      name: "Gabinete Cooler Master MasterBox Q300L MicroATX",
      price: 49.99,
      stock: 18,
      categoryId: caseCategory.id,
      subcategoryId: midTowerCaseSubcategory.id,
      properties: JSON.stringify({
        tipo: "MicroATX",
        color: "Negro",
        dimensiones: "370 x 230 x 378 mm",
        compatibilidad: "MicroATX, Mini-ITX",
        subcategoria: midTowerCaseSubcategory.name,
      }),
    },
  });

  await prisma.component.create({
    data: {
      name: "Fuente de Poder Corsair CV550, 550W 80 Plus Bronze",
      price: 59.99,
      stock: 20,
      categoryId: powerSupplyCategory.id,
      subcategoryId: bronzePowerSupplySubcategory.id,
      properties: JSON.stringify({
        potencia: "550W",
        certificación: "80 Plus Bronze",
        modular: "No",
        tamaño: "ATX",
        subcategoria: bronzePowerSupplySubcategory.name,
      }),
    },
  });

  await prisma.component.create({
    data: {
      name: "Fuente de Poder EVGA 600 W1, 600W 80 Plus Gold",
      price: 79.99,
      stock: 20,
      categoryId: powerSupplyCategory.id,
      subcategoryId: goldPowerSupplySubcategory.id,
      properties: JSON.stringify({
        potencia: "600W",
        certificación: "80 Plus Gold",
        modular: "No",
        tamaño: "ATX",
        subcategoria: goldPowerSupplySubcategory.name,
      }),
    },
  });

  await prisma.component.create({
    data: {
      name: "Placa Madre ASUS TUF Gaming B550M-Plus (Wi-Fi)",
      price: 139.99,
      stock: 22,
      categoryId: motherboardCategory.id,
      subcategoryId: microAtxMotherboardSubcategory.id,
      properties: JSON.stringify({
        chipset: "B550",
        formato: "Micro ATX",
        memoriaSoportada: "128GB",
        puertosUSB: "USB 3.2 Gen 2",
        subcategoria: microAtxMotherboardSubcategory.name,
      }),
    },
  });

  await prisma.component.create({
    data: {
      name: "Placa Madre MSI MPG X570 Gaming Edge WiFi",
      price: 189.99,
      stock: 15,
      categoryId: motherboardCategory.id,
      subcategoryId: atxMotherboardSubcategory.id,
      properties: JSON.stringify({
        chipset: "X570",
        formato: "ATX",
        memoriaSoportada: "128GB",
        puertosUSB: "USB 3.2 Gen 2",
        subcategoria: atxMotherboardSubcategory.name,
      }),
    },
  });

  await prisma.component.create({
    data: {
      name: "Refrigeración por Aire Cooler Master Hyper 212 Black Edition",
      price: 39.99,
      stock: 35,
      categoryId: coolingCategory.id,
      subcategoryId: airCoolingSubcategory.id,
      properties: JSON.stringify({
        tipo: "Aire",
        tamaño: "120mm",
        ruido: "26 dBA",
        compatibilidad: "Intel y AMD",
        subcategoria: airCoolingSubcategory.name,
      }),
    },
  });

  await prisma.component.create({
    data: {
      name: "Refrigeración Líquida NZXT Kraken X63",
      price: 149.99,
      stock: 20,
      categoryId: coolingCategory.id,
      subcategoryId: liquidCoolingSubcategory.id,
      properties: JSON.stringify({
        tipo: "Líquida",
        tamaño: "280mm",
        ruido: "21 dBA",
        compatibilidad: "Intel y AMD",
        subcategoria: liquidCoolingSubcategory.name,
      }),
    },
  });

  console.log("Datos iniciales creados con éxito.");
};

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

